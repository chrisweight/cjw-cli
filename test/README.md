<!-- Badges go here -->

# Newton Hybrid Template

Welcome to Newton Hybrid Template! This README is the central hub for all project documentation. It's a living document that updates often. Please review and change it as needed. See details in [TeamDocs](https://teamdocs.digitalpfizer.com/readme).

<!-- TOC insertAnchor:false -->

- [Rules of Engagement](#rules-of-engagement)
- [System Requirements](#system-requirements)
- [Quick Start](#quick-start)
- [Passpack and Vault](#passpack-and-vault)
- [Environments](#environments)
- [App Overview](#app-overview)
- [Build Instructions](#build-instructions)
- [Terminology](#terminology)
- [Project Architecture](#project-architecture)
- [Documentation](#documentation)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Feature Flags](#feature-flags)
- [Libraries Used](#libraries-used)
- [Google Analytics](#google-analytics)
- [Urban Airship](#urban-airship)
- [Backend Environments / Recall Functionality](#backend-environments--recall-functionality)
- [Service Accounts](#service-accounts)
- [Localization Details](#localization-details)
- [3rd Party Font Usage](#3rd-party-font-usage)
- [Recall Functionality Business Case](#recall-functionality-business-case)

<!-- /TOC -->

## Rules of Engagement
<!-- The top 2 or 3 things every person on the team must know and follow while working on the project. -->
1. Follow the [Playbook](./@docs/PLAYBOOK.md).
1. Follow all project [documentation](./@docs/) and [checklists](./@docs/checklists/).
1. Follow all project [ADRs](./@docs/adr/README.md) and [TDRs](./@docs/tdr/README.md).


## System Requirements
<!-- Software that must be installed on the local machine for this project to build correctly. -->
| Required | Version
| :--- | :---
| Docker | 17.09 or higher


## Quick Start
<!-- What is the shortest path to writing code and pushing my changes back to GitHub? -->
```bash
cd path/to/your/new/project
git clone git@github.com:pfizer/newton-hybrid-template.git .
git remote set-url origin <your project github repo>
./.pfli/bootstrap
```


## Passpack and Vault
<!-- NO PLAINTEXT PASSWORDS PLEASE! -->
**Passpack**
- :construction: Under Construction

**Vault**
- :construction: Under Construction


## Environments
<!-- Which platforms are we supporting? -->
| Platform | Version
| :--- | :---
| Android | 4.4.x and higher
| iOS | 10.x and higher


## App Overview
<!-- Overview of the app purpose, features and special functionality go here. -->
The Newton Hybrid Template repo is a "Starter Kit" for new Ionic mobile apps. Clone this repo only once into your new project. Once cloned, update and customize as needed for your project. See overview in [Quick Start](#quick-start).

**Key Features**
- :construction: Under Construction

**Unique Selling Points (USP)**
- :construction: Under Construction

**Key Performance Indicators (KPI)**
- See [KPI](./@docs/KPI.md)

**Benchmark Apps**
- :construction: Under Construction


## Build Instructions
<!-- Full build configuration info goes here, as well as any special instructions. -->
:construction: Under Construction


## Terminology
<!-- Special vocabulary and definitions used in the project. -->
See [TERMINOLOGY](./@docs/TERMINOLOGY.md).


## Project Architecture
<!-- How is the repo organized? -->
```bash
.
├── .pfli/              # All CLI build and deploy scripts
├── @docs/              # All project documentation
├── .dockerignore       # Ignore file for Docker
├── .editorconfig       # Config file for EditorConfig
├── .gitignore          # Ignore file for Git
├── .travis.yml         # Config file for Travis CI
├── CHANGELOG.md        # Change Log for this project
├── Dockerfile          # Config file for Docker
├── README.md           # This file
├── docker-compose.yml  # Config file for Docker Compose
└── package.json        # Config file for npm
```


## Documentation
<!-- How is the project documentation organized? -->
```bash
@docs/
├── adr/                        # https://teamdocs.digitalpfizer.com/adr
├── assets/                     # Images, logos, etc. used in documentation
├── checklists/                 # Checklists used as part of dev and deployment
├── tdr/                        # https://teamdocs.digitalpfizer.com/tdr
├── ACCOUNTS.md                 # All service accounts for the project
├── ANALYTICS.md                # How analytics are collected and accessed
├── DELIVERY.md                 # Delivery, deployment, and the "Definition of Done" for the project
├── DIRECTORY.md                # Who's who on the project team
├── ELSE.md                     # Links to further reading and documentation
├── FEATURE_FLAGS.md            # https://teamdocs.digitalpfizer.com/feature-flags
├── FONTS.md                    # All 3rd-party fonts used in the project
├── INFRASTRUCTURE.md           # The tech stack for the project
├── KPI.md                      # Key Performance Indicators for this project
├── LICENCES.md                 # License info for assets and libraries used in the project
├── LOCALIZATION.md             # Which geographic regions are covered and how localication will take place
├── LOGGING.md                  # How data is logged for debugging and support
├── PLAN.md                     # Plan of Attack and priority order for app features
├── PLAYBOOK.md                 # How we like to work at the project
├── PUSH_NOTIFICATIONS.md       # How to set up and use push notifications
├── RECALL.md                   # How to "recall" the project from production, and cases when a recall is needed
├── RISKS.md                    # How we mitigate risks
├── SCOPE.md                    # The technical scope for the project
├── SDLC.md                     # Pfizer Software Development Lifecycle Compliance
├── STYLEGUIDE.md               # The DOs and DON'Ts when writing code
└── TERMINOLOGY.md              # Vocabulary you might hear specific to the project
```

## Development
<!-- Full configuration and installation instructions for writing code. -->
- All persistent development is done on the `master` branch.

- Test your code locally before pushing to GitHub both in browser and on device.

- `master` is the only branch tested on [Travis CI](https://travis-ci.com/pfizer/newton-moon) and pushed into production.

- `master` is always the Source of Truth for the current state of this project.

- Develop and test directly on the `master` branch when in doubt.

:boom: **CAUTION: Use feature branches with caution. Feature branches are always personal, temporary, and must be deleted as soon as they are merged back into `master `.**

- Use the `.pfli/*` family of custom scripts for common developer tasks:

| Script | Description
| :--- | :---
| `bootstrap` | Set up new local development environment.
| `build` | Build a deployable app without watching for changes.
| `clean` | Delete all build artifacts.
| `start` | Launch a local development environment and watch for changes.
| `test` | Run the full test suite against your build without watching for changes.

:warning: **WARNING: The custom CLI tools [Pfli](https://github.com/pfizer/pfli) and [Pfaws](https://github.com/pfizer/pfaws) will soon make it easy to work with the `.pfli/*` family of scripts. Please run scripts manually until Pfli and Pfaws are ready for release.**

- This repo uses Docker to standardize the development environment across team members. Use Docker for both development of this repo, as well as development of your project.

- The Docker Compose file links your current working directory on your local machine to the `/home/app/` directory in the Docker container. Local changes to files will show up in the Docker container. You do not need to rebuild the container while working.

**Working in This Repo**

```bash
cd path/to/newton-hybrid-template
docker-compose up
```
**Working in Your Project**

```bash
cd path/to/your/project
docker-compose up
```


## Testing
<!-- How are we testing the code in this project? -->
:construction: Under Construction


## Deployment
<!-- Full configuration and instructions for deploying to production. -->
:construction: Under Construction


## Feature Flags
<!-- What do the feature flags mean in this project? -->
See [FEATURE_FLAGS](./@docs/FEATURE_FLAGS.md).


## Libraries Used
<!-- Which libraries are used in this project? Or link to a config file. -->
See [npm config file](./package.json).


## Google Analytics
<!-- Info for configuring for each environment. -->
See [ANALYTICS](./@docs/ANALYTICS.md).


## Urban Airship
<!-- Info for configuring UA for each environment. -->
See [PUSH_NOTIFICATIONS](./@docs/PUSH_NOTIFICATIONS.md).


## Backend Environments / Recall Functionality
<!-- How to configure for each backend environment, as well as the URLs for each environment. -->
See [RECALL](./@docs/RECALL.md).


## Service Accounts
<!-- NO PLAINTEXT PASSWORDS PLEASE! -->
See [ACCOUNTS](./@docs/ACCOUNTS.md).


## Localization Details
<!-- How localization is configured, and any other localization details. -->
See [LOCALIZATION](./@docs/LOCALIZATION.md).


## 3rd Party Font Usage
<!-- List any 3rd party fonts that are being used, as well as the license associated with them. Or link to a config file. -->
See [FONTS](./@docs/FONTS.md).


## Recall Functionality Business Case
<!-- If applicable, the business case and how the recall functionality is being used. -->
See [RECALL](./@docs/RECALL.md).
