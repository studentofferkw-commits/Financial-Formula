// FIX: Implemented missing type definitions for the application.
export interface NavLinkInfo {
  path: string;
  key: string;
}

export interface Article {
  id: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  content: string;
  contentEn: string;
}

export interface Currency {
  code: string; // e.g., 'USD'
  name: string; // e.g., 'US Dollar'
  nameAr: string; // e.g., 'دولار أمريكي'
  
  // Main currency unit names
  singular: string; // e.g., 'dollar'
  plural: string; // e.g., 'dollars'
  singularAr: string; // e.g., 'دولار'
  dualAr: string; // e.g., 'دولاران'
  pluralAr: string; // e.g., 'دولارات'
  
  // Fractional currency unit names
  fraction: string; // e.g., 'cent'
  fractionPlural: string; // e.g., 'cents'
  fractionSingularAr: string; // e.g., 'سنت'
  fractionDualAr: string; // e.g., 'سنتان'
  fractionPluralAr: string; // e.g., 'سنتات'
  
  decimals: number; // number of decimal places, e.g., 2
}

export interface GlossaryTerm {
  id: string;
  termAr: string;
  termEn: string;
  definitionAr: string;
  definitionEn: string;
  abbreviationAr?: string;
  abbreviationEn?: string;
}