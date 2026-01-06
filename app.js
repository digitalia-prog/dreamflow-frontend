// Traductions
const translations = {
  fr: {
    generating: '⏳ Génération en cours...',
    error_prompt: '⚠️ Veuillez entrer une description de votre produit/service',
    error_count: '⚠️ Le nombre de scripts doit être entre 1 et 1000',
    scripts_generated: 'Scripts Générés',
    hook_viral: 'Hooks Viraux',
    full_script: 'Script Complet',
    agency_package: 'Package Agence',
    duration: 'Durée',
    hook: 'Hook',
    body: 'Corps',
    cta: 'Call-to-Action',
    tips: 'Conseils Pro',
    platform: 'Plateforme',
    niche: 'Niche',
    type: 'Type',
    note: 'Note',
    connect_api: 'Connecte l\'API DreamFlow pour la génération complète avec IA !'
  },
  en: {
    generating: '⏳ Generating...',
    error_prompt: '⚠️ Please enter a product/service description',
    error_count: '⚠️ Script count must be between 1 and 1000',
    scripts_generated: 'Generated Scripts',
    hook_viral: 'Viral Hooks',
    full_script: 'Full Script',
    agency_package: 'Agency Package',
    duration: 'Duration',
    hook: 'Hook',
    body: 'Body',
    cta: 'Call-to-Action',
    tips: 'Pro Tips',
    platform: 'Platform',
    niche: 'Niche',
    type: 'Type',
    note: 'Note',
    connect_api: 'Connect DreamFlow API for full AI generation!'
  },
  es: {
    generating: '⏳ Generando...',
    error_prompt: '⚠️ Por favor ingrese una descripción del producto/servicio',
    error_count: '⚠️ El número de scripts debe estar entre 1 y 1000',
    scripts_generated: 'Scripts Generados',
    hook_viral: 'Hooks Virales',
    full_script: 'Script Completo',
    agency_package: 'Paquete Agencia',
    duration: 'Duración',
    hook: 'Gancho',
    body:
'Cuerpo',
    cta: 'Llamada a la Acción',
    tips: 'Consejos Pro',
    platform: 'Plataforma',
    niche: 'Nicho',
    type: 'Tipo',
    note: 'Nota',
    connect_api: '¡Conecta la API de DreamFlow para generación completa con IA!'
  }
};

// Templates professionnels
const templates = {
  'ugc-beaute': {
    contentType: 'ugc',
    niche: 'beaute',
    platform: 'instagram-reels',
    scriptCount: 3,
    prompt: 'Sérum anti-âge à la vitamine C, résultats visibles en 14 jours, texture légère, convient peaux sensibles'
  },
  'ugc-tech': {
    contentType: 'ugc',
    niche: 'tech',
    platform: 'tiktok',
    scriptCount: 5,
    prompt: 'Écouteurs sans fil à réduction de bruit active, autonomie 30h, son haute fidélité'
  },
  'hook-viral': {
    contentType: 'hook',
    niche: 'ecommerce',
    platform: 'tiktok',
    scriptCount: 10,
    prompt: 'Produit innovant qui résout un problème du quotidien'
  },
  'script-pub': {
    contentType: 'script',
    niche: 'ecommerce',
    platform: 'facebook-reels',
    scriptCount: 3,
    prompt: 'Campagne publicitaire pour lancement de produit e-commerce'
  },
  'agence': {
    contentType: 'agence',
    niche: 'agence-marketing',
    platform: 'tiktok',
    scriptCount: 50,
    prompt: 'Agence marketing digital spécialisée en UGC et création de contenu viral pour marques e-commerce'
  }
};
// Durées recommandées par plateforme
const platformDurations = {
  'tiktok': '15-60s',
  'instagram-reels': '15-90s',
  'instagram-stories': '15s',
  'facebook-reels': '15-60s',
  'facebook-stories': '15s',
  'youtube-shorts': '15-60s',
  'snapchat': '10s',
  'linkedin': '30-90s',
  'twitter': '30-45s',
  'pinterest': '15-30s'
};

function loadTemplate(templateName) {
  const template = templates[templateName];
  if (!template) return;
  
  document.getElementById('contentType').value = template.contentType;
  document.getElementById('niche').value = template.niche;
  document.getElementById('platform').value = template.platform;
  document.getElementById('scriptCount').value = template.scriptCount;
  document.getElementById('prompt').value = template.prompt;
}

function generate() {
  const language = document.getElementById('language').value;
  const contentType = document.getElementById('contentType').value;
  const niche = document.getElementById('niche').value;
  const platform = document.getElementById('platform').value;
  const scriptCount = parseInt(document.getElementById('scriptCount').value);
  const prompt = document.getElementById('prompt').value;
  const result = document.getElementById('result');
  
  const t = translations[language];
  
  if (!prompt) {
    result.innerHTML = '<p style="color: #ff6b6b;">' + t.error_prompt + '</p>';
    result.classList.add('show');
    return;
  }
  
  if (scriptCount < 1 || scriptCount > 1000) {
    result.innerHTML = '<p style="color: #ff6b6b;">' + t.error_count + '</p>';
    result.classList.add('show');
    return;
  }
  
  result.innerHTML = '<p style="color: #667eea;">' + t.generating + '</p>';
  result.classList.add('show');
  
  setTimeout(() => {
    let generatedContent = '';
    
    if (contentType === 'ugc') {
      generatedContent = generateUGC(niche, platform, prompt, scriptCount, language);
    } else if (contentType === 'hook') {
      generatedContent = generateHooks(niche, platform, prompt, scriptCount, language);
    } else if (contentType === 'script') {
      generatedContent = generateFullScript(niche, platform, prompt, scriptCount, language);
    } else if (contentType === 'agence') {
      generatedContent = generateAgencyScripts(niche, platform, prompt, scriptCount, language);
    }
    
    result.innerHTML = generatedContent;
  }, 1500);
}

function generateUGC(niche, platform, prompt, count, lang) {
  return '<h2 style="color: #667eea;">✨ ' + count + ' Scripts UGC</h2><p>Contenu UGC optimisé pour ' + platform + '</p>';
}

function generateHooks(niche, platform, prompt, count, lang) {
  return '<h2 style="color: #667eea;">🔥 ' + count + ' Hooks Viraux</h2><p>Hooks optimisés</p>';
}

function generateFullScript(niche, platform, prompt, count, lang) {
  return '<h2 style="color: #667eea;">🎬 Script Complet</h2><p>Script optimisé pour ' + platform + '</p>';
}

function generateAgencyScripts(niche, platform, prompt, count, lang) {
  return '<h2 style="color: #667eea;">🏢 Package Agence: ' + count + ' Scripts</h2><p>Package professionnel</p>';
}

function getNicheName(niche) {
  return niche;
}
