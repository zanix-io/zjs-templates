# ZANIX Framework Templates

[![npm version](https://badge.fury.io/js/%40zanix%2Ftemplates.svg)](https://badge.fury.io/js/%40zanix%2Ftemplates) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Introduction](#introduction)
- Templates:
  1. [ Api base](#api-base)
- [Support and Contributions](#support-and-contributions)
- [License](#license)

## Introduction

This repository contains templates for the ZANIX Framework, designed to accelerate the development of projects using the ZANIX ecosystem. The templates provide a starting point for various types of applications and follow the ZANIX architecture patterns.

## Templates

### Api base

A template for creating API-based applications using the `@zanix/server` library. It can be installed using the command `zjs new api [path]` of [@zanix/Cli](https://www.npmjs.com/package/@zanix/cli#readme), where `[path]` is the destination path for the new project.

**Architecture Overview:**

The templates in this repository follow the Adapter pattern, which promotes separation of concerns and flexibility in integrating with external services and APIs. The overall architecture of a ZANIX application is depicted below:

```
┌────────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐
│      Controllers       │   │                       │   │                       │   │                       │
│      Resolvers         │───────►    Services      ◄─────►       Adapters       │──────► Clients/Providers  │
│      Subscribers       │   │                       │   │                       │   │                       │
└────────────────────────┘   └───────────────────────┘   └───────────────────────┘   └───────────────────────┘
             ▲                         |                           |                             |
             │                         └─────────────────────────────────────────────────────────┘
             │                                                     ▼
┌───────────────────────┐   ┌────────────────────────────────────────────────────┐   ┌───────────────────────┐
│                       │   │                                                    │   │         Tasker        │
│          API          │───────►                  Dependencies                 ◄─────►        Cache         │
│   (REST, GQL, AMQP)   │   │              (Jobs, Models, Middlewares,...)       │   │        AMQP, DB       │
└───────────────────────┘   └────────────────────────────────────────────────────┘   └───────────────────────┘

```

- **Controllers, Resolvers and Subscribers**: Responsible for handling incoming requests and invoking the corresponding service methods or resolving data.
- **Services**: Implement the business logic of the application and interact with adapters for data retrieval, manipulation, or external service communication.
- **Adapters**: Provide the necessary abstractions and interfaces to interact with external services or data sources. They can also function as "wildcard" classes.
- **Clients/Providers**: Act as clients to external services or providers of data. Clients are responsible for making requests and handling responses, while providers offer data access or integration capabilities.

**Project Structure:**

The project structure for the generated template follows a modular approach to maintain separation of concerns and facilitate maintainability. Here's an overview of the folder structure:
root folder

- 📄 CHANGELOG.md
- 📄 jest.config.js
- 📄 package-lock.json
- 📄 package.json
- 📄 tsconfig.json
- 📄 README.md
- 📄 .eslintrc
- 📄 .prettierrc
- 📁 resources (assets, data, statics, scripts, non-modular public files)
- 📁 src
  - 📁 tests
  - 📁 app
    - 📁 amqp
      - 📄 \*.subscriber.ts (injects one service)
    - 📁 gql
      - 📁 types
        - 📄 \*.graphql
        - 📄 \*.gql
      - 📁 inputs
        - 📄 \*.graphql
        - 📄 \*.gql
      - 📄 \*.resolver.ts (injects one service)
    - 📁 rest
      - 📄 \*.controller.ts (injects one service)
    - 📁 commons
      - 📁 middlewares
        - 📄 \*.pipes.ts
        - 📄 \*.interceptor.ts
        - 📄 \*.ts
      - 📁 rtos
        - 📄 \*.rto.ts (request transfer object)
      - 📁 utils
      - ...
  - 📁 config
    - 📁 secrets
      - 📄 \*.srt
    - 📄 \*.sqlite (local config data)
    - 📄 zanix.ts (app file. For variable, secret, and configuration definition)
  - 📁 core
    - 📁 adapters
      - 📁 data
        - 📁 models
        - 📄 \*.adapter.ts (database adapter or repositories)
      - 📁 interactors
        - 📁 clients
          - 📄 \*.client.ts
        - 📁 providers
          - 📄 \*.provider.ts
        - 📄 \*.adapter.ts (client or provider adapters)
      - 📄 \*.adapter.ts (general adapters)
    - 📁 jobs
    - 📁 services
      - 📄 \*.service.ts (services)
  - 📁 typings

This structure is designed to promote modularity, scalability, and maintainability in your ZANIX Framework projects. Feel free to explore each directory to understand the purpose of different files and folders. Only the `resources` and `src/config` folders must not change their name or location for the CLI commands to work correctly.

## Support and Contributions

For more information on how to use the templates and get started with ZANIX Templates, please refer to the documentation, to the [changelog](/CHANGELOG.md#changelog), or to the individual template's README file, like [Zanix Configuration](https://github.com/zanix-io/zjs-config#readme) and [Zanix Server](https://www.npmjs.com/package/@zanix/server#readme).

If you have any suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request. We welcome contributions from the community to make the ZANIX Framework Templates even better!

## License

The ZANIX Framework Templates are open-source software licensed under the [MIT License](https://github.com/zanix-io/zjs-templates/blob/main/LICENSE). Feel free to use, modify, and distribute the templates as per the terms of the license.
