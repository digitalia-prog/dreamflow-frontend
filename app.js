function generate() {
  const prompt = document.getElementById('prompt').value;
  const result = document.getElementById('result');
  
  if (!prompt) {
    result.textContent = '⚠️ Veuillez entrer un prompt';
    return;
  }
  
  result.textContent = '⏳ Génération en cours...';
  
  // Simulation (tu connecteras ton API plus tard)
  setTimeout(() => {
    result.textContent = `✨ Script généré pour : "${prompt}"

🎬 Accroche : "Découvre ce produit incroyable !"
📝 Corps : Présentation engageante avec bénéfices clés
🎯 CTA : "Clique sur le lien en bio !"

💡 Note : Connecte ton API pour la vraie génération IA`;
  }, 1500);
}
