# Guide Git - Présentation Technique

Ce guide présente les conventions Git à respecter pour le dossier `presentation_technique`. Ce guide est conforme au standard STD-GV-001 (Standard Git Workflow - Projet3) et définit les règles de branchement, de commit, et de workflow pour garantir une collaboration efficace et une traçabilité complète des modifications. L'objectif est de maintenir une cohérence dans l'utilisation de Git et de faciliter la maintenance du projet.

## ✅ État actuel du dossier

Le dossier `presentation_technique` est prêt à être commité dans votre repo git.

## 📋 Inventaire complet des fichiers dans le repo Git (64 fichiers)

**Note** : Les fichiers exclus par `.gitignore` ne sont pas listés ici (email_candidature.md, *.txt, *.pdf, etc.).

### Fichiers racine (16 fichiers - ordre alphabétique selon arborescence.txt)
- ✅ `.gitignore` - Fichier d'exclusion Git
- ✅ `common.css` - Styles CSS communs (413 lignes)
- ✅ `common.js` - Scripts JavaScript communs
- ✅ `favicon.png` - Icône du site
- ✅ `GIT_README.md` - Guide Git (ce fichier)
- ✅ `index.html` - Page d'accueil principale
- ✅ `lettre_motivation_ecole.html` - Lettre de motivation académique
- ✅ `lettre_motivation_entreprise.html` - Lettre de motivation professionnelle
- ✅ `og-image.png` - Image Open Graph pour partage social
- ✅ `presentation_complete.html` - Présentation complète (14 sections)
- ✅ `presentation_synthetique.html` - Présentation synthétique (6 sections)
- ✅ `profil_personnel.html` - Profil personnel et professionnel
- ✅ `rapport_projection_dimension_standards_projet3.html` - Rapport de projection dimensionnelle
- ✅ `README.md` - Documentation principale
- ✅ `robots.txt` - Instructions pour les robots d'indexation
- ✅ `sitemap.xml` - Plan du site pour les moteurs de recherche

### Documentation technique (15 fichiers Markdown)
- ✅ `documentation_technique/01_introduction.md`
- ✅ `documentation_technique/02_relation_ia.md`
- ✅ `documentation_technique/03_orientation_professionnelle.md`
- ✅ `documentation_technique/04_fonctionnalites_operationnelles.md`
- ✅ `documentation_technique/05_resolution_problemes.md`
- ✅ `documentation_technique/06_init_sequence.md`
- ✅ `documentation_technique/07_architecture_technique.md`
- ✅ `documentation_technique/08_observabilite_qualite.md`
- ✅ `documentation_technique/09_amelioration_continue.md`
- ✅ `documentation_technique/10_evolutions_prevues.md`
- ✅ `documentation_technique/11_competences_preexistantes.md`
- ✅ `documentation_technique/12_vision_strategique.md`
- ✅ `documentation_technique/13_metriques_chiffres_cles.md`
- ✅ `documentation_technique/14_conclusion.md`
- ✅ `documentation_technique/15_standards_projet3.md`

### Documents de candidature (2 fichiers Markdown)
- ✅ `documents/candidature/lettre_motivation_ecole.md`
- ✅ `documents/candidature/lettre_motivation_entreprise.md`
- ⚠️ `documents/candidature/email_candidature.md` - **Exclu du repo** (défini dans `.gitignore`)

### Documentation additionnelle
- ⚠️ `documents/documentation/arborescence.txt` - **Exclu du repo** (défini dans `.gitignore` - *.txt)
- ⚠️ `documents/documentation/arborescence.md` - **Exclu du repo** (défini dans `.gitignore`)
- ⚠️ `documents/rapports/` - Dossier vide dans le repo

### Annexes visuelles (33 fichiers PNG au total)
- ✅ `favicon.png` - Icône du site (racine)
- ✅ `og-image.png` - Image Open Graph (racine)
- ✅ `presentation_visuel/Correlation_Anticipation/` - 2 captures d'écran
- ✅ `presentation_visuel/demo_video/` - 1 fichier (demo.png)
- ✅ `presentation_visuel/Pole0_Demonstration/` - 9 fichiers (1 capture + Pipeline/ avec 8 fichiers)
- ✅ `presentation_visuel/Pole1_Technologies_Infrastructures/` - 1 capture d'écran
- ✅ `presentation_visuel/Pole2_Logiciels_Developpement/` - 1 capture d'écran
- ✅ `presentation_visuel/Pole3_IA_DataScience/` - 1 capture d'écran
- ✅ `presentation_visuel/Pole4_Cybersecurite/` - 1 capture d'écran
- ✅ `presentation_visuel/Pole5_Conformite_Ethique/` - 1 capture d'écran
- ✅ `presentation_visuel/Pole6_Reseaux_Telecoms/` - 1 capture d'écran
- ✅ `presentation_visuel/Pole7_Systemes_Virtualisation/` - 1 capture d'écran
- ✅ `presentation_visuel/Pole8_Cloud_EdgeComputing/` - 1 capture d'écran
- ✅ `presentation_visuel/Pole9_Donnees_Analytics/` - 1 capture d'écran
- ✅ `presentation_visuel/Pole10_Innovation_RD/` - 1 capture d'écran
- ✅ `presentation_visuel/Vue_global/` - 10 fichiers (9 captures d'écran + Formulaire.png)

**Total PNG** : 2 (racine) + 31 (presentation_visuel/) = 33 fichiers

**Total dans le repo Git : 64 fichiers** (63 fichiers précédents + demo_video/demo.png)

**Fichiers exclus par `.gitignore`** :
- `documents/candidature/email_candidature.md` (fichier personnel)
- `documents/documentation/arborescence.txt` et `arborescence.md` (fichiers d'arborescence)
- Tous les fichiers `*.txt` (pattern global)
- Tous les fichiers `*.pdf` (pattern global)
- Fichiers temporaires, logs, et fichiers système
- Fichiers de développement (`prepare-git.ps1`, `.gitignore.backup`)

## 🚀 Prochaines étapes

### 1. Vérifier les fichiers à commiter
```powershell
cd C:\Users\Gabriel\Desktop\Projet3
git status presentation_technique/
```

### 2. Ajouter les fichiers au staging
```powershell
git add presentation_technique/
```

### 3. Commiter les fichiers
```powershell
git commit -m "docs(presentation): ajout de la présentation technique complète - 64 fichiers (sitemap.xml, robots.txt et demo_video inclus)"
```

### 4. Pousser vers le repo distant (si configuré)
```powershell
git push
```

## 📐 Conventions de branches

Selon le standard STD-GV-001, toutes les branches doivent suivre le format suivant :

- **`feature/nom-fonctionnalite`** : Développement de nouvelles fonctionnalités
  - Créées à partir de `develop`
  - Mergées dans `develop` via pull request

- **`fix/nom-correction`** : Correction de bugs dans `develop`
  - Créées à partir de `develop`
  - Mergées dans `develop` via pull request

- **`hotfix/nom-correction`** : Correction urgente en production
  - Créées à partir de `main`
  - Mergées dans `main` ET `develop` via pull request

- **`docs/nom-documentation`** : Amélioration de la documentation
  - Créées à partir de `develop`
  - Mergées dans `develop` via pull request

- **`release/v1.2.3`** : Préparation d'une nouvelle version
  - Créées à partir de `develop`
  - Mergées dans `main` et `develop`

## 💬 Messages de commit

Les messages de commit doivent suivre le format suivant :

```
type(scope): description courte

Description détaillée si nécessaire.
```

### Types autorisés :
- **`feat`** : Nouvelle fonctionnalité
- **`fix`** : Correction de bug
- **`docs`** : Documentation uniquement
- **`style`** : Changements de formatage (pas de changement de code)
- **`refactor`** : Refactorisation du code
- **`test`** : Ajout ou modification de tests
- **`chore`** : Tâches de maintenance

### Exemples pour ce dossier :
- `docs(presentation): ajout de la présentation technique complète`
- `fix(html): correction des liens de navigation`
- `style(css): harmonisation des styles de section`
- `feat(presentation): ajout de favicon et og-image`
- `docs(readme): mise à jour de l'arborescence réelle`

## 📝 Notes importantes

- Le fichier `.gitignore` exclut automatiquement :
  - `documents/candidature/email_candidature.md` (fichier personnel)
  - `documents/documentation/arborescence.txt` et `arborescence.md` (fichiers d'arborescence)
  - Tous les fichiers `*.txt` (pattern global)
  - Tous les fichiers `*.pdf` (pattern global)
  - Les fichiers temporaires, logs, et fichiers système
  - Les fichiers de développement (`prepare-git.ps1`, `.gitignore.backup`)
  - Les fichiers de structure/planning (`plan_*`, `structure_*`)
- Tous les fichiers de présentation et documentation essentiels sont inclus
- Les images PNG sont incluses (attention à la taille du repo si nécessaire)
- Les fichiers `favicon.png` et `og-image.png` sont présents

## 🔍 Commandes de vérification

### Voir un résumé des fichiers modifiés
```powershell
git status --short presentation_technique/
```

### Voir les détails des modifications
```powershell
git diff --cached --stat presentation_technique/
```

### Compter les fichiers par type
```powershell
Get-ChildItem -Path presentation_technique -Recurse -File | Group-Object Extension | Select-Object Name, Count
```

### Vérifier la taille totale du dossier
```powershell
Get-ChildItem -Path presentation_technique -Recurse -File | Measure-Object -Property Length -Sum | Select-Object @{Name="Taille (MB)";Expression={[math]::Round($_.Sum / 1MB, 2)}}
```

## ✅ Checklist avant commit

- [ ] Tous les fichiers HTML sont valides (pas d'erreurs de syntaxe)
- [ ] Les liens internes fonctionnent correctement
- [ ] Les fichiers `favicon.png` et `og-image.png` sont présents
- [ ] Les fichiers `sitemap.xml` et `robots.txt` sont présents
- [ ] Les styles CSS sont cohérents
- [ ] La documentation est à jour
- [ ] Les README reflètent la vraie arborescence
- [ ] Les dates sont harmonisées (datePublished: 2025-01-01, dateModified: 2025-12-29)
- [ ] Aucun fichier temporaire ou de cache n'est inclus
- [ ] Cohérence narrative à 100% (ordre chronologique correct)
- [ ] Cohérence des données numériques à 100% (pôles, collecteurs, standards, lignes)
- [ ] Cohérence terminologique à 100% (Proof of Concept, perte de contexte, etc.)
- [ ] Cohérence temporelle à 100% (rapport de projection rédigé au conditionnel avec formulations "projeté", "selon la projection", etc.)
- [ ] Comportement des sections optimisé (délai de 150ms pour éviter les perturbations visuelles)
- [ ] Alignement adaptatif des cartes fonctionnel (1-2 lignes = centré, 3+ lignes = justifié)

## 🎨 Améliorations récentes

- ✅ **Comportement des sections optimisé** : Délai de 150ms lors de l'ouverture d'une section pour éviter les perturbations visuelles
- ✅ **Alignement adaptatif des cartes** : Système automatique qui centre les textes courts et justifie les textes longs
- ✅ **Section "Structure et organisation"** : Toutes les cartes de cette section sont automatiquement centrées pour une meilleure cohérence visuelle
- ✅ **Vérification complète** : Cohérence générale, histoire, logique, données numériques, métriques et qualité d'écriture vérifiées à 100%

---

*Dernière mise à jour : 2025-12-29*
