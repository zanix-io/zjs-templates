# ZANIX Framework Templates

[![npm version](https://badge.fury.io/js/%40zanix%2Ftemplates.svg)](https://badge.fury.io/js/%40zanix%2Ftemplates) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This repository contains templates for the ZANIX Framework, designed to accelerate the development of projects using the ZANIX ecosystem. The templates provide a starting point for various types of applications and follow the ZANIX architecture patterns.

## Templates

Currently, the repository includes the following template:

- **api-base**: A template for creating API-based applications using the `@zanix/server` library. It can be installed using the command `zjs new api [path]`, where `[path]` is the destination path for the new project.

## Architecture Overview

The templates in this repository follow the Adapter pattern, which promotes separation of concerns and flexibility in integrating with external services and APIs. The overall architecture of a ZANIX application is depicted below:

```
┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐
│                       │   │                       │   │                       │   │                       │
│ Controllers/Resolvers │───────►    Services      ◄─────►       Adapters      ◄──────►  Clients/Providers  │
│                       │   │                       │   │                       │   │                       │
└───────────────────────┘   └───────────────────────┘   └───────────────────────┘   └───────────────────────┘
             ▲                         |                           |                             |
             │                         └─────────────────────────────────────────────────────────┘
             │                                                     ▼
┌───────────────────────┐   ┌───────────────────────────────────────────────────────────────────────────────┐
│                       │   │                                                                               |
│           API         │───────►                             Dependencies                                  │
│                       │   │                                                                               |
└───────────────────────┘   └───────────────────────────────────────────────────────────────────────────────┘
```

- **Controllers/Resolvers**: Responsible for handling incoming requests and invoking the corresponding service methods or resolving data.
- **Services**: Implement the business logic of the application and interact with adapters for data retrieval, manipulation, or external service communication.
- **Adapters**: Provide the necessary abstractions and interfaces to interact with external services or data sources.
- **Clients/Providers**: Act as clients to external services or providers of data. Clients are responsible for making requests and handling responses, while providers offer data access or integration capabilities.

## Project Structure

The project structure for the generated template follows a modular approach to maintain separation of concerns and facilitate maintainability. Here's an overview of the folder structure:
root folder

```
├─ CHANGELOG.md
├─ jest.config.js
├─ package-lock.json
├─ package.json
├─ tsconfig.json
├─ README.md
├─ .eslintrc
├─ .prettierrc
├─ zanix.app.ts
└─ src
├─ tests
├─ app
│ ├─ (gql)
│ │ ├─ types
│ │ │ ├─ _.graphql
│ │ │ └─ _.gql
│ │ └─ inputs
│ │ ├─ _.graphql
│ │ └─ _.gql
│ ├─ (rest)
│ │ ├─ rtos
│ │ │ └─ _.rto.ts (request transfer object)
│ │ └─ _.controller.ts (extends one service)
│ ├─ adapters
│ │ └─ _.adapter.ts (extends one client, provider, or inject adapters)
│ ├─ services
│ │ └─ _.service.ts (extends one adapter or inject services)
│ ├─ types.d.ts
│ ├─ commons
│ │ ├─ clients
│ │ │ └─ _.client.ts
│ │ ├─ providers
│ │ │ └─ _.provider.ts
│ │ ├─ middlewares
│ │ │ ├─ _.pipes.ts
│ │ │ └─ _.interceptor.ts
│ │ ├─ models or data
│ │ └─ utils
├─ config
│ ├─ secrets
│ │ └─ \*.srt
│ └─ index.ts (for variable and secret configuration/definition like @zanix/server)
```

This structure is designed to promote modularity, scalability, and maintainability in your ZANIX Framework projects. Feel free to explore each directory to understand the purpose of different files and folders.

For more information on how to use the templates and get started with ZANIX Framework, please refer to the documentation or the individual template's README file, like [Zanix Configuration](https://github.com/zanix-io/zjs-config#readme) and [Zanix Server](https://github.com/zanix-io/zjs-server#readme).

## Contributing

If you have any suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request. We welcome contributions from the community to make the ZANIX Framework Templates even better!

## License

The ZANIX Framework Templates are open-source software licensed under the [MIT License](https://github.com/zanix-io/zjs-templates/blob/main/LICENSE). Feel free to use, modify, and distribute the templates as per the terms of the license.
