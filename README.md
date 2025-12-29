# Présentation technique - Projet IT Dashboard A+

*(Annexe technique - dossier d'admission Bachelor en Informatique / Intelligence Artificielle)*

Ce dossier présente l'ensemble de la documentation technique du projet IT Dashboard A+. Cette présentation a été conçue comme une annexe technique complète pour un dossier d'admission en Bachelor en Informatique et Intelligence Artificielle. L'objectif de ce dossier est de démontrer les compétences techniques acquises, la démarche d'apprentissage autonome, et la capacité à structurer et documenter un projet complexe. Nous allons explorer l'architecture, les fonctionnalités, la gouvernance IA, et la vision stratégique du projet. Cette documentation permet de comprendre le contexte de réalisation, les choix techniques, et l'évolution du projet depuis son origine.

## 📊 Statistiques du dossier (repo Git)

- **Total fichiers dans le repo** : 64 fichiers
- **Fichiers HTML** : 7 fichiers (présentations interactives)
- **Fichiers Markdown** : 17 fichiers (15 documentation technique + 2 candidature)
- **Images PNG** : 33 fichiers (captures d'écran et ressources visuelles)
- **Fichiers CSS/JS** : 2 fichiers (styles et scripts communs)
- **Fichiers de configuration** : 5 fichiers (README.md, GIT_README.md, .gitignore, sitemap.xml, robots.txt)

## 📁 Structure complète du dossier (selon arborescence.txt)

```
presentation_technique/
│
├── 📄 Fichiers racine (16 fichiers dans le repo Git)
│   ├── .gitignore                                    # Fichier d'exclusion Git
│   ├── common.css                                    # Styles CSS communs (413 lignes)
│   ├── common.js                                     # Scripts JavaScript communs
│   ├── favicon.png                                   # Icône du site
│   ├── GIT_README.md                                 # Guide Git et conventions
│   ├── index.html                                    # Page d'accueil principale
│   ├── lettre_motivation_ecole.html                 # Lettre de motivation académique
│   ├── lettre_motivation_entreprise.html            # Lettre de motivation professionnelle
│   ├── og-image.png                                  # Image Open Graph pour partage social
│   ├── presentation_complete.html                    # Présentation complète (14 sections)
│   ├── presentation_synthetique.html                 # Présentation synthétique (6 sections)
│   ├── profil_personnel.html                        # Profil personnel et professionnel
│   ├── rapport_projection_dimension_standards_projet3.html  # Rapport de projection dimensionnelle
│   └── README.md                                     # Documentation principale (ce fichier)
│
├── 📚 documentation_technique/ (15 fichiers Markdown)
│   ├── 01_introduction.md                            # Introduction au projet
│   ├── 02_relation_ia.md                             # Relation avec l'IA et prompt engineering
│   ├── 03_orientation_professionnelle.md            # Orientation professionnelle
│   ├── 04_fonctionnalites_operationnelles.md         # Fonctionnalités opérationnelles
│   ├── 05_resolution_problemes.md                    # Résolution de problèmes
│   ├── 06_init_sequence.md                           # INIT_SEQUENCE : système de gouvernance IA
│   ├── 07_architecture_technique.md                  # Architecture technique
│   ├── 08_observabilite_qualite.md                   # Observabilité et qualité
│   ├── 09_amelioration_continue.md                   # Amélioration continue
│   ├── 10_evolutions_prevues.md                      # Évolutions prévues
│   ├── 11_competences_preexistantes.md               # Compétences préexistantes
│   ├── 12_vision_strategique.md                      # Vision stratégique
│   ├── 13_metriques_chiffres_cles.md                # Métriques et chiffres clés
│   ├── 14_conclusion.md                              # Conclusion
│   └── 15_standards_projet3.md                       # Standards Projet3 (31 standards)
│
├── 📝 documents/ (2 fichiers Markdown dans le repo Git)
│   ├── candidature/
│   │   ├── lettre_motivation_ecole.md                # Lettre de motivation académique (Markdown)
│   │   └── lettre_motivation_entreprise.md           # Lettre de motivation professionnelle (Markdown)
│   │   └── email_candidature.md                      # ⚠️ Exclu du repo (.gitignore)
│   ├── documentation/                                # Dossier vide dans le repo Git
│   │   └── arborescence.txt                          # ⚠️ Exclu du repo (.gitignore - *.txt)
│   └── rapports/                                     # Dossier vide dans le repo Git
│
└── 🖼️ presentation_visuel/ (31 fichiers PNG)
    ├── Correlation_Anticipation/ (2 fichiers)
    │   ├── Capture d'écran 2025-12-24 004254.png
    │   └── Capture d'écran 2025-12-24 004304.png
    │
    ├── demo_video/ (1 fichier)
    │   └── demo.png
    │
    ├── Pole0_Demonstration/ (9 fichiers)
    │   ├── Capture d'écran 2025-12-24 003537.png
    │   └── Pipeline/ (8 fichiers)
    │       ├── pipeline_1.png
    │       ├── pipeline_2.png
    │       ├── pipeline_3.png
    │       ├── pipeline_4.png
    │       ├── pipeline_5.png
    │       ├── pipeline_6.png
    │       ├── pipeline_7.png
    │       └── pipeline_8.png
    │
    ├── Pole1_Technologies_Infrastructures/ (1 fichier)
    │   └── Capture d'écran 2025-12-24 004602.png
    │
    ├── Pole2_Logiciels_Developpement/ (1 fichier)
    │   └── Capture d'écran 2025-12-24 004902.png
    │
    ├── Pole3_IA_DataScience/ (1 fichier)
    │   └── Capture d'écran 2025-12-24 004742.png
    │
    ├── Pole4_Cybersecurite/ (1 fichier)
    │   └── Capture d'écran 2025-12-24 005020.png
    │
    ├── Pole5_Conformite_Ethique/ (1 fichier)
    │   └── Capture d'écran 2025-12-24 005058.png
    │
    ├── Pole6_Reseaux_Telecoms/ (1 fichier)
    │   └── Capture d'écran 2025-12-24 005135.png
    │
    ├── Pole7_Systemes_Virtualisation/ (1 fichier)
    │   └── Capture d'écran 2025-12-24 005208.png
    │
    ├── Pole8_Cloud_EdgeComputing/ (1 fichier)
    │   └── Capture d'écran 2025-12-24 005247.png
    │
    ├── Pole9_Donnees_Analytics/ (1 fichier)
    │   └── Capture d'écran 2025-12-24 005329.png
    │
    ├── Pole10_Innovation_RD/ (1 fichier)
    │   └── Capture d'écran 2025-12-24 005408.png
    │
    └── Vue_global/ (10 fichiers)
        ├── Capture d'écran 2025-12-24 002922.png
        ├── Capture d'écran 2025-12-24 002959.png
        ├── Capture d'écran 2025-12-24 003046.png
        ├── Capture d'écran 2025-12-24 003101.png
        ├── Capture d'écran 2025-12-24 003119.png
        ├── Capture d'écran 2025-12-24 003135.png
        ├── Capture d'écran 2025-12-24 003159.png
        ├── Capture d'écran 2025-12-24 003226.png
        └── Formulaire.png
```

## 🚀 Navigation et accès

### Présentations HTML interactives

Les présentations HTML offrent une expérience interactive complète avec navigation, styles professionnels et accessibilité optimale :

1. **`index.html`** - Page d'accueil
   - Vue d'ensemble du projet
   - Navigation vers toutes les sections
   - Cartes de présentation des différents documents

2. **`presentation_synthetique.html`** - Présentation synthétique (6 sections)
   - Introduction
   - Architecture
   - Fonctionnalités
   - INIT_SEQUENCE
   - Standards
   - Métriques
   - Conclusion

3. **`presentation_complete.html`** - Présentation complète (14 sections)
   - Toutes les sections de la documentation technique
   - Vision détaillée du projet
   - Contexte de réalisation complet

4. **`rapport_projection_dimension_standards_projet3.html`** - Rapport de projection dimensionnelle
   - Analyse des 31 standards Projet3
   - Projections d'impact et de maturité
   - Bibliographie et glossaire complets

5. **`profil_personnel.html`** - Profil personnel et professionnel
   - Présentation personnelle
   - Parcours et compétences
   - Vision professionnelle

6. **`lettre_motivation_ecole.html`** - Lettre de motivation académique
   - Candidature pour Bachelor IT/IA
   - Contexte du projet

7. **`lettre_motivation_entreprise.html`** - Lettre de motivation professionnelle
   - Candidature en alternance
   - Présentation professionnelle

### Documentation technique Markdown

15 fichiers Markdown dans `documentation_technique/` détaillent chaque aspect du projet :

- **Fichiers essentiels** (6 fichiers) : Introduction, Relation IA, Orientation, Fonctionnalités, Résolution problèmes, INIT_SEQUENCE
- **Fichiers complémentaires** (9 fichiers) : Architecture, Observabilité, Amélioration continue, Évolutions, Compétences, Vision stratégique, Métriques, Conclusion, Standards

### Documents de candidature

2 fichiers Markdown dans `documents/candidature/` (dans le repo Git) :
- Lettre de motivation académique (`lettre_motivation_ecole.md`)
- Lettre de motivation professionnelle (`lettre_motivation_entreprise.md`)

**Note** : Les fichiers suivants sont exclus du repo Git (définis dans `.gitignore`) :
- `documents/candidature/email_candidature.md` (fichier personnel)
- `documents/documentation/arborescence.txt` et `arborescence.md` (fichiers d'arborescence)
- Tous les fichiers `*.txt` et `*.pdf`

### Annexes visuelles

31 captures d'écran organisées par catégorie dans `presentation_visuel/` :
- `Correlation_Anticipation/` : 2 captures d'écran
- `demo_video/` : 1 fichier (demo.png)
- `Pole0_Demonstration/` : 9 fichiers (1 capture + Pipeline/ avec 8 fichiers)
- `Pole1_Technologies_Infrastructures/` à `Pole10_Innovation_RD/` : 9 fichiers (1 capture par pôle)
- `Vue_global/` : 10 fichiers (9 captures d'écran + Formulaire.png)

## 🎨 Ressources partagées

- **`common.css`** : Styles CSS centralisés (413 lignes)
  - Variables CSS avec commentaires WCAG
  - Styles communs pour tous les fichiers HTML
  - Support du mode sombre
  - Accessibilité optimisée

- **`common.js`** : Scripts JavaScript communs
  - Navigation interactive
  - Fonctionnalités partagées

- **`favicon.png`** : Icône du site (32x32 ou 64x64 pixels)
- **`og-image.png`** : Image Open Graph (1200x630 pixels)
- **`sitemap.xml`** : Plan du site pour les moteurs de recherche
- **`robots.txt`** : Instructions pour les robots d'indexation

## 📋 Conformité et qualité

- ✅ **Standard 01_Qualité** : Conforme
- ✅ **WCAG 2.1 AA/AAA** : Accessibilité validée
- ✅ **HTML5** : Structure valide
- ✅ **SEO** : Méta-données complètes, sitemap.xml et robots.txt
- ✅ **Cohérence** : Styles et terminologie uniformisés
- ✅ **Dates harmonisées** : datePublished (2025-01-01) et dateModified (2025-12-29) cohérentes

## 🔗 Déploiement

Ce dossier est conçu pour être déployé sur **GitHub Pages** :
- URL de base : `https://gab-hub-ctrl.github.io/presentation_technique/`
- Tous les liens sont configurés pour GitHub Pages
- Structure optimisée pour le déploiement statique

## 📖 Guide Git

Consultez `GIT_README.md` pour les conventions Git et le workflow de contribution.

## 🎯 Objectif

Ce dossier démontre :
- Les compétences techniques acquises
- La démarche d'apprentissage autonome
- La capacité à structurer et documenter un projet complexe
- La maîtrise de l'architecture, de la gouvernance IA et de la documentation technique

---

*Dernière mise à jour : 2025-12-29*
