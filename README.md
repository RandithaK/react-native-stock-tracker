# react-native-stock-tracker

- [Architecture & testing](#architecture--testing) 🧩
- [Development & build](#development--build) 🛠️
- [Folder structure](#folder-structure) 🗂️

## Technical highlights






- **useMemo** — memoizes expensive portfolio calculations to reduce JS overhead.


- **useCallback** — stable function refs for `FlatList`.



- **FlatList** — optimized `keyExtractor` and `renderItem`.


## Architecture & testing

- **React Native CLI (Bare)** — full access to native code and configurations.


- **New Architecture (JSI/Fabric)** — ready for synchronous JS↔Native communication.


- **Unit testing (Jest)** — automated tests for utilities and logic.



## Backend integration

- **Node.js / Express** — lightweight REST API for stock data.


- **Android emulator networking** — use `10.0.2.2` to reach the host machine from the emulator.

## Development & build

Install dependencies:

```bash
npm install
```

Start Metro:

```bash
npx react-native start
```

Android (debug) build:

```bash
cd android && ./gradlew assembleDebug
```



Example backend start (from `stock-backend`):

```bash
node server.js
```




## Folder structure




Top-level
- `README.md` — this file
- `stockApp/` — React Native application
  - `App.tsx` — app entry
  - `src/` — source code
    - `features/` (e.g., `stocks/`) — feature folders (slices, sagas, screens)
    - `store/` — Redux store configuration and middleware
    - `theme/` — ThemeContext and styling providers
    - `utils/` — pure functions and business logic
    - `__tests__/` — Jest unit tests
  - `android/`, `ios/` — native projects
  - `package.json`, `tsconfig.json`, `jest.config.js`, `babel.config.js`, `metro.config.js`
- `stock-backend/` — Node/Express server
  - `server.js` — local API entry point
  - `package.json`

## CI / Deployment
- Project structure is **Fastlane**-compatible and ready for CI/CD pipelines.

---

> For questions or further formatting preferences, open an issue or submit a PR. ✨