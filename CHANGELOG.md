# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/cli[@1.3.0][3] (2025-03-17)

### ✨ Features

- Enable `enableAutomaticSorting` option by default for `withBuilderExtensions` ([4921132][4])

### ⚙️ Build System

- **deps:** bump @black-flag/checks from 1.0.0 to 1.0.1 ([f0c2f91][5])
- **deps:** bump @black-flag/core from 2.0.0 to 2.0.1 ([20fbf60][6])
- **deps:** bump @black-flag/extensions from 2.0.0 to 2.1.0 ([fdaf33c][7])
- **deps:** bump core-js from 3.40.0 to 3.41.0 ([4c8a07a][8])

<br />

### 🏗️ Patch @-xun/cli[@1.3.1][9] (2025-03-19)

#### 🪄 Fixes

- **src:** retire bfe cross-talk bug workaround since it was fixed upstream ([96516a9][10])

#### ⚙️ Build System

- **deps:** bump @black-flag/core from 2.0.1 to 2.0.2 ([2d30595][11])
- **deps:** bump @black-flag/extensions from 2.1.0 to 2.2.0 ([ab901b2][12])

<br />

## @-xun/cli[@1.2.0][13] (2025-03-15)

### ✨ Features

- **src:** re-export @black-flag/checks ([c6dc62e][14])

### 🪄 Fixes

- **src:** use "%O" when outputting error via debug ([96e8f03][15])

### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.2 to 1.0.4 ([78495e7][16])
- **deps:** bump @black-flag/core from 1.3.2 to 2.0.0 ([9968b47][17])
- **deps:** bump @black-flag/extensions from 1.0.2 to 2.0.0 ([ac5815c][18])
- **deps:** bump type-fest from 4.35.0 to 4.37.0 ([2a3dd74][19])
- **package:** install @black-flag/checks ([6e8e5cb][20])
- **package:** update @-xun/symbiote to 2.0.0 ([3c39708][21])

### 🔥 Reverted

- _"build(deps): bump core-js from 3.40.0 to 3.41.0"_ ([c7a284e][22])

<br />

## @-xun/cli[@1.1.0][23] (2025-02-17)

### ✨ Features

- Export all @black-flag/\* exports from index entry point ([caf1d74][24])

<br />

### 🏗️ Patch @-xun/cli[@1.1.2][25] (2025-02-21)

#### ⚙️ Build System

- Update rejoinder to 1.2.5 ([f690733][26])

<br />

### 🏗️ Patch @-xun/cli[@1.1.1][27] (2025-02-20)

#### 🪄 Fixes

- Properly handle optional nature of the rejoinder-listr2 peer dependency ([d7dd85e][28])

#### ⚙️ Build System

- **package:** move type-fest into prod dependencies ([28fc078][29])

<br />

## @-xun/cli[@1.0.0][30] (2025-02-17)

### ✨ Features

- Land initial @-xun/cli implementation (factored out from symbiote) ([118cc97][31])

<br />

### 🏗️ Patch @-xun/cli[@1.0.1][32] (2025-02-17)

#### 🪄 Fixes

- **src:** export `CliErrorMessage` ([74bfa47][33])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.2.0...@-xun/cli@1.3.0
[4]: https://github.com/Xunnamius/cli-utils/commit/492113245a1cddd75b67bff429c0a7ee0f3d224a
[5]: https://github.com/Xunnamius/cli-utils/commit/f0c2f916e11660cbfab0e6fdc410985d8b0697bf
[6]: https://github.com/Xunnamius/cli-utils/commit/20fbf60dc8093bd60d27900c5c8fa429ecf8ee4b
[7]: https://github.com/Xunnamius/cli-utils/commit/fdaf33ca37f258d35cea45a4cbf82bc7c1652626
[8]: https://github.com/Xunnamius/cli-utils/commit/4c8a07a3253b8e71eea735d96e170fe64b5f2b35
[9]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.3.0...@-xun/cli@1.3.1
[10]: https://github.com/Xunnamius/cli-utils/commit/96516a981b0fba7a1003f8a30f7f4ee0565bfe85
[11]: https://github.com/Xunnamius/cli-utils/commit/2d30595850a74a6f060f64470af3e84b1c553c4b
[12]: https://github.com/Xunnamius/cli-utils/commit/ab901b24738fb866e8de58bd992de105e66c249e
[13]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.1.2...@-xun/cli@1.2.0
[14]: https://github.com/Xunnamius/cli-utils/commit/c6dc62e050d1e4ac974e25c076edd1a80c46e054
[15]: https://github.com/Xunnamius/cli-utils/commit/96e8f03b6fb4a27d95c08826e8a2d8f1a4284d73
[16]: https://github.com/Xunnamius/cli-utils/commit/78495e7368132959edf4f56e98ce96602c8800c3
[17]: https://github.com/Xunnamius/cli-utils/commit/9968b472b02b16c69dbc5e2ae48ea3dc823de08f
[18]: https://github.com/Xunnamius/cli-utils/commit/ac5815c79558c732596e659d6cc4f8da157a3575
[19]: https://github.com/Xunnamius/cli-utils/commit/2a3dd74ee54a0ee76b49abb38929102e5cb0c0e3
[20]: https://github.com/Xunnamius/cli-utils/commit/6e8e5cb5235f6adf38b44ca6907e4e1ccab05d85
[21]: https://github.com/Xunnamius/cli-utils/commit/3c397089709d86ee446d9bdacaa019e22675c8ab
[22]: https://github.com/Xunnamius/cli-utils/commit/c7a284e51ef5349c2f43c26fe07feb15a870a5a3
[23]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.0.1...@-xun/cli@1.1.0
[24]: https://github.com/Xunnamius/cli-utils/commit/caf1d74e366c1a64e9bac76fadfeeb54b974c17e
[25]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.1.1...@-xun/cli@1.1.2
[26]: https://github.com/Xunnamius/cli-utils/commit/f690733445198491a679d615c5aa719695b3fda3
[27]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.1.0...@-xun/cli@1.1.1
[28]: https://github.com/Xunnamius/cli-utils/commit/d7dd85e25599a2735f7dfb4b141e117f83dc5bbd
[29]: https://github.com/Xunnamius/cli-utils/commit/28fc0782adb521af45732407f4551061bcd3f770
[30]: https://github.com/Xunnamius/cli-utils/compare/118cc97de27374bcd26e43f836c2d837aa9f46f4...@-xun/cli@1.0.0
[31]: https://github.com/Xunnamius/cli-utils/commit/118cc97de27374bcd26e43f836c2d837aa9f46f4
[32]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.0.0...@-xun/cli@1.0.1
[33]: https://github.com/Xunnamius/cli-utils/commit/74bfa47fc80f4ebda9a4e0fb9b2b0d112ef3baed
