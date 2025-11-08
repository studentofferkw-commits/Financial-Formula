import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useTranslation } from '../hooks/useTranslation';

// Declare global variables from CDN scripts for TypeScript
declare const pdfjsLib: any;
declare const mammoth: any;
declare const XLSX: any;

const DocumentChecker: React.FC = () => {
  const { t, language } = useTranslation();
  const [inputText, setInputText] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const clearState = () => {
    setError('');
    setAnalysisResult('');
    setInputText('');
    setSelectedFile(null);
  }

  const handleRemoveFile = () => {
    clearState();
    // Also clear the file input element if needed, by resetting the form or using a ref
  }

  const parseFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const arrayBuffer = e.target?.result;
                if (!arrayBuffer) {
                    reject(new Error("Failed to read file."));
                    return;
                }

                if (file.type === 'application/pdf') {
                    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
                    let text = '';
                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const content = await page.getTextContent();
                        text += content.items.map((item: any) => item.str).join(' ');
                    }
                    resolve(text);
                } else if (file.name.endsWith('.docx')) {
                    const result = await mammoth.extractRawText({ arrayBuffer });
                    resolve(result.value);
                } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
                    const workbook = XLSX.read(arrayBuffer, { type: 'buffer' });
                    let text = '';
                    workbook.SheetNames.forEach((sheetName: string) => {
                        const worksheet = workbook.Sheets[sheetName];
                        text += XLSX.utils.sheet_to_txt(worksheet);
                    });
                    resolve(text);
                } else {
                    reject(new Error("Unsupported file type"));
                }
            } catch (err) {
                console.error("Parsing error:", err);
                reject(err);
            }
        };
        reader.onerror = () => reject(new Error("FileReader error."));
        reader.readAsArrayBuffer(file);
    });
};


  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];
    if (!allowedTypes.includes(file.type) && !file.name.endsWith('.docx') && !file.name.endsWith('.xlsx')) {
        setError(t('documentChecker.unsupportedFile'));
        return;
    }
    
    clearState();
    setIsLoading(true);
    setSelectedFile(file);
    setAnalysisResult(t('documentChecker.analyzingFile')); // User feedback
    
    try {
        const text = await parseFile(file);
        setInputText(text); // Set parsed text for analysis
    } catch (err) {
        setError(t('documentChecker.fileParseError'));
        clearState();
    } finally {
        setIsLoading(false);
        setAnalysisResult('');
    }
  };


  const handleAnalyze = async () => {
    const textToAnalyze = inputText.trim();
    if (!textToAnalyze) return;

    setIsLoading(true);
    setError('');
    setAnalysisResult('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      
      const systemInstruction = language === 'ar'
        ? 'أنت مدقق مالي وخبير قانوني متخصص في مراجعة المستندات المالية مثل العقود والفواتير والإيصالات. مهمتك هي تحليل النص الذي يقدمه المستخدم للتحقق من دقته ووضوحه واكتماله والمخاطر المحتملة. قدم تقريرًا واضحًا ومنظمًا مع ملخص، وقائمة بالنتائج مصنفة حسب الخطورة (مثل: حرج، تحذير، اقتراح)، وتوصيات محددة لإصلاح كل مشكلة. استخدم تنسيق الماركداون.'
        : 'You are an expert financial auditor and legal consultant specializing in reviewing financial documents like contracts, invoices, and receipts. Your task is to analyze the user-provided text for accuracy, clarity, completeness, and potential risks. Provide a clear, structured report with a summary, a list of findings categorized by severity (e.g., Critical, Warning, Suggestion), and concrete recommendations for how to fix each issue. Use Markdown for formatting.';

      const contents = `Please review the following document text. The user's language is '${language}'. \n\nDocument Text:\n---\n${textToAnalyze}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
        },
      });

      setAnalysisResult(response.text);

    } catch (e) {
      console.error(e);
      setError(t('documentChecker.error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-4">
          <div>
            <label htmlFor="document-input" className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {t('documentChecker.pasteText')}
            </label>
            <textarea
              id="document-input"
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-gray-400 resize-y"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                if (selectedFile) setSelectedFile(null); // Clear file if user types
              }}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
              disabled={!!selectedFile}
            />
          </div>

          <div className="flex items-center">
              <hr className="flex-grow border-gray-300 dark:border-slate-600"/>
              <span className="mx-2 text-sm text-gray-500 dark:text-gray-400">{t('documentChecker.or')}</span>
              <hr className="flex-grow border-gray-300 dark:border-slate-600"/>
          </div>

          {selectedFile ? (
             <div className="p-3 bg-teal-50 dark:bg-teal-900/50 border border-teal-200 dark:border-teal-700 rounded-lg text-center">
                <p className="text-sm font-medium text-teal-800 dark:text-teal-200">{t('documentChecker.fileSelected')}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-mono truncate">{selectedFile.name}</p>
                <button onClick={handleRemoveFile} className="mt-2 text-xs text-red-500 hover:text-red-700 dark:hover:text-red-400 font-semibold">{t('documentChecker.removeFile')}</button>
            </div>
          ) : (
            <div className="relative border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-6 text-center hover:border-teal-500 dark:hover:border-teal-400 transition-colors">
              <input 
                  type="file" 
                  id="file-upload" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.xls,.xlsx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-teal-600 dark:text-teal-400">
                      <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{t('documentChecker.uploadPrompt')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('documentChecker.supportedFiles')}</p>
              </label>
            </div>
          )}


          <button
            onClick={handleAnalyze}
            disabled={isLoading || !inputText.trim()}
            className="w-full flex justify-center items-center bg-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors disabled:bg-teal-400 disabled:cursor-not-allowed dark:disabled:bg-teal-800"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('documentChecker.loading')}
              </>
            ) : (
              t('documentChecker.analyze')
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {t('documentChecker.analysisReport')}
          </h2>
          <div className="bg-gray-50 dark:bg-slate-900/50 p-4 rounded-lg border border-gray-200 dark:border-slate-700 h-full min-h-[300px] overflow-y-auto">
            {isLoading && !analysisResult && (
              <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                <p>{selectedFile ? t('documentChecker.analyzingFile') : t('documentChecker.loading')}</p>
              </div>
            )}
            {error && (
              <div className="p-4 text-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 rounded-lg">
                <p className="font-semibold">{error}</p>
              </div>
            )}
            {analysisResult && (
              <div
                className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: analysisResult.replace(/\n/g, '<br />') }}
              />
            )}
            {!isLoading && !error && !analysisResult && (
                 <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                    <p>{t('converter.outputPlaceholder')}</p>
                 </div>
            )}
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
        {t('documentChecker.disclaimer')}
      </p>
    </div>
  );
};

export default DocumentChecker;