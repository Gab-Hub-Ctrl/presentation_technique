# Guide Git - Présentation Technique

## ✅ Préparation terminée

Le dossier `presentation_technique` est maintenant prêt à être commité dans votre repo git.

## 📋 Fichiers ajoutés (35 fichiers)

- ✅ `.gitignore` - Fichier d'exclusion Git
- ✅ `README.md` - Documentation principale
- ✅ `prepare-git.ps1` - Script d'aide (optionnel)
- ✅ 14 fichiers Markdown dans `documentation_technique/`
- ✅ 4 fichiers HTML (index.html, presentation_synthetique.html, presentation_complete.html, lettre_motivation_ecole.html)
- ✅ 1 fichier Markdown (lettre_motivation_ecole.md)
- ✅ 16 images PNG dans `presentation_visuel/Annexes/`

## 🚀 Prochaines étapes

### 1. Vérifier les fichiers ajoutés
```powershell
cd C:\Users\Gabriel\Desktop\Projet3
git status presentation_technique/
```

### 2. Commiter les fichiers
```powershell
git commit -m "Ajout de la présentation technique - dossier d'admission Bachelor IT/IA"
```

### 3. Pousser vers le repo distant (si configuré)
```powershell
git push
```

## 📝 Notes

- Le fichier `.gitignore` exclut automatiquement les fichiers temporaires, logs, et fichiers système
- Tous les fichiers de présentation et documentation sont inclus
- Les images PNG sont incluses (attention à la taille du repo si nécessaire)

## 🔍 Vérification

Pour voir un résumé des fichiers:
```powershell
git status --short presentation_technique/
```

Pour voir les détails:
```powershell
git diff --cached --stat presentation_technique/
```

