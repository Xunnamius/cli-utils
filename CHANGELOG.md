# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/cli[@2.0.0][3] (2025-05-28)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### ⚙️ Build System

- **deps:** bump @black-flag/checks from 1.0.1 to 2.0.0 ([75d30bf][4])
- **deps:** bump @black-flag/core from 2.0.2 to 3.0.0 ([7ae890c][5])
- **deps:** bump @black-flag/extensions from 2.2.1 to 3.0.0 ([4a25939][6])
- **deps:** bump core-js from 3.41.0 to 3.42.0 ([27f1ba7][7])
- **deps:** bump type-fest from 4.37.0 to 4.41.0 ([e3c11a7][8])
- **package:** drop support for node\@18 ([9f93181][9])

<br />

### 🏗️ Patch @-xun/cli[@2.0.4][10] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump @-xun/project-types from 2.0.0 to 2.0.1 ([bd60e98][11])
- **deps:** bump @black-flag/checks from 2.0.0 to 2.0.1 ([6de8c33][12])
- **deps:** bump @black-flag/core from 3.0.1 to 3.0.2 ([72c06d4][13])
- **deps:** bump @black-flag/extensions from 3.1.0 to 3.1.2 ([aae557a][14])
- **deps:** bump core-js from 3.42.0 to 3.43.0 ([4368fac][15])
- **deps:** bump rejoinder from 1.2.5 to 2.0.1 ([e02b2fb][16])

<br />

### 🏗️ Patch @-xun/cli[@2.0.3][17] (2025-05-31)

#### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.4 to 2.0.0 ([5a336c8][18])
- **deps:** bump @black-flag/core from 3.0.0 to 3.0.1 ([ee3b622][19])

<br />

### 🏗️ Patch @-xun/cli[@2.0.2][20] (2025-05-28)

#### ⚙️ Build System

- **deps:** bump @black-flag/extensions from 3.0.1 to 3.1.0 ([9eb962e][21])

<br />

### 🏗️ Patch @-xun/cli[@2.0.1][22] (2025-05-28)

#### ⚙️ Build System

- **deps:** bump @black-flag/extensions from 3.0.0 to 3.0.1 ([f1e1f91][23])

<br />

## @-xun/cli[@1.3.0][24] (2025-03-17)

### ✨ Features

- Enable `enableAutomaticSorting` option by default for `withBuilderExtensions` ([4921132][25])

### ⚙️ Build System

- **deps:** bump @black-flag/checks from 1.0.0 to 1.0.1 ([f0c2f91][26])
- **deps:** bump @black-flag/core from 2.0.0 to 2.0.1 ([20fbf60][27])
- **deps:** bump @black-flag/extensions from 2.0.0 to 2.1.0 ([fdaf33c][28])
- **deps:** bump core-js from 3.40.0 to 3.41.0 ([4c8a07a][29])

<br />

### 🏗️ Patch @-xun/cli[@1.3.2][30] (2025-03-20)

#### ⚙️ Build System

- **deps:** bump @black-flag/extensions from 2.2.0 to 2.2.1 ([58357e0][31])

<br />

### 🏗️ Patch @-xun/cli[@1.3.1][32] (2025-03-19)

#### 🪄 Fixes

- **src:** retire bfe cross-talk bug workaround since it was fixed upstream ([96516a9][33])

#### ⚙️ Build System

- **deps:** bump @black-flag/core from 2.0.1 to 2.0.2 ([2d30595][34])
- **deps:** bump @black-flag/extensions from 2.1.0 to 2.2.0 ([ab901b2][35])

<br />

## @-xun/cli[@1.2.0][36] (2025-03-15)

### ✨ Features

- **src:** re-export @black-flag/checks ([c6dc62e][37])

### 🪄 Fixes

- **src:** use "%O" when outputting error via debug ([96e8f03][38])

### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.2 to 1.0.4 ([78495e7][39])
- **deps:** bump @black-flag/core from 1.3.2 to 2.0.0 ([9968b47][40])
- **deps:** bump @black-flag/extensions from 1.0.2 to 2.0.0 ([ac5815c][41])
- **deps:** bump type-fest from 4.35.0 to 4.37.0 ([2a3dd74][42])
- **package:** install @black-flag/checks ([6e8e5cb][43])
- **package:** update @-xun/symbiote to 2.0.0 ([3c39708][44])

### 🔥 Reverted

- _"build(deps): bump core-js from 3.40.0 to 3.41.0"_ ([c7a284e][45])

<br />

## @-xun/cli[@1.1.0][46] (2025-02-17)

### ✨ Features

- Export all @black-flag/\* exports from index entry point ([caf1d74][47])

<br />

### 🏗️ Patch @-xun/cli[@1.1.2][48] (2025-02-21)

#### ⚙️ Build System

- Update rejoinder to 1.2.5 ([f690733][49])

<br />

### 🏗️ Patch @-xun/cli[@1.1.1][50] (2025-02-20)

#### 🪄 Fixes

- Properly handle optional nature of the rejoinder-listr2 peer dependency ([d7dd85e][51])

#### ⚙️ Build System

- **package:** move type-fest into prod dependencies ([28fc078][52])

<br />

## @-xun/cli[@1.0.0][53] (2025-02-17)

### ✨ Features

- Land initial @-xun/cli implementation (factored out from symbiote) ([118cc97][54])

<br />

### 🏗️ Patch @-xun/cli[@1.0.1][55] (2025-02-17)

#### 🪄 Fixes

- **src:** export `CliErrorMessage` ([74bfa47][56])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.3.2...@-xun/cli@2.0.0
[4]: https://github.com/Xunnamius/cli-utils/commit/75d30bf16362f038ca36f5aa043cdc3ec3a3db0a
[5]: https://github.com/Xunnamius/cli-utils/commit/7ae890c30951e215362fe394ce1a68e54686b41c
[6]: https://github.com/Xunnamius/cli-utils/commit/4a2593987b73206f9c08f1319bd4efc708cbc428
[7]: https://github.com/Xunnamius/cli-utils/commit/27f1ba7bb51e8ba248d0ad57f67c0b7f87a38e7f
[8]: https://github.com/Xunnamius/cli-utils/commit/e3c11a7b57fd1522147588b2879220cae946b075
[9]: https://github.com/Xunnamius/cli-utils/commit/9f931815fdc9c2ac298ecaacf937edd135e18759
[10]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@2.0.3...@-xun/cli@2.0.4
[11]: https://github.com/Xunnamius/cli-utils/commit/bd60e98a032d8e213732e5f9a0a040796381b902
[12]: https://github.com/Xunnamius/cli-utils/commit/6de8c33d7d13aada2af0477f153ed98b402d939f
[13]: https://github.com/Xunnamius/cli-utils/commit/72c06d4d1879b014d2307be1976253daf17fa999
[14]: https://github.com/Xunnamius/cli-utils/commit/aae557a63291b938c140e170d8152c1458ac5b1f
[15]: https://github.com/Xunnamius/cli-utils/commit/4368facb7dbcabd57cfb6afe8e757529b11b02c4
[16]: https://github.com/Xunnamius/cli-utils/commit/e02b2fbcc45bfb6d19b2337b12d84d8720176fe9
[17]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@2.0.2...@-xun/cli@2.0.3
[18]: https://github.com/Xunnamius/cli-utils/commit/5a336c837a38881cf0f2c5dfafcc370d8300c63f
[19]: https://github.com/Xunnamius/cli-utils/commit/ee3b62284e42b3dfc69798faf8a643636a01bfee
[20]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@2.0.1...@-xun/cli@2.0.2
[21]: https://github.com/Xunnamius/cli-utils/commit/9eb962e29a2804ff653f1668cd16863e2dfb94f1
[22]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@2.0.0...@-xun/cli@2.0.1
[23]: https://github.com/Xunnamius/cli-utils/commit/f1e1f91ccac79f89774d19b8f650971d80b8b80a
[24]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.2.0...@-xun/cli@1.3.0
[25]: https://github.com/Xunnamius/cli-utils/commit/492113245a1cddd75b67bff429c0a7ee0f3d224a
[26]: https://github.com/Xunnamius/cli-utils/commit/f0c2f916e11660cbfab0e6fdc410985d8b0697bf
[27]: https://github.com/Xunnamius/cli-utils/commit/20fbf60dc8093bd60d27900c5c8fa429ecf8ee4b
[28]: https://github.com/Xunnamius/cli-utils/commit/fdaf33ca37f258d35cea45a4cbf82bc7c1652626
[29]: https://github.com/Xunnamius/cli-utils/commit/4c8a07a3253b8e71eea735d96e170fe64b5f2b35
[30]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.3.1...@-xun/cli@1.3.2
[31]: https://github.com/Xunnamius/cli-utils/commit/58357e0710d76ce0563ca5e52e487c13b073afdd
[32]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.3.0...@-xun/cli@1.3.1
[33]: https://github.com/Xunnamius/cli-utils/commit/96516a981b0fba7a1003f8a30f7f4ee0565bfe85
[34]: https://github.com/Xunnamius/cli-utils/commit/2d30595850a74a6f060f64470af3e84b1c553c4b
[35]: https://github.com/Xunnamius/cli-utils/commit/ab901b24738fb866e8de58bd992de105e66c249e
[36]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.1.2...@-xun/cli@1.2.0
[37]: https://github.com/Xunnamius/cli-utils/commit/c6dc62e050d1e4ac974e25c076edd1a80c46e054
[38]: https://github.com/Xunnamius/cli-utils/commit/96e8f03b6fb4a27d95c08826e8a2d8f1a4284d73
[39]: https://github.com/Xunnamius/cli-utils/commit/78495e7368132959edf4f56e98ce96602c8800c3
[40]: https://github.com/Xunnamius/cli-utils/commit/9968b472b02b16c69dbc5e2ae48ea3dc823de08f
[41]: https://github.com/Xunnamius/cli-utils/commit/ac5815c79558c732596e659d6cc4f8da157a3575
[42]: https://github.com/Xunnamius/cli-utils/commit/2a3dd74ee54a0ee76b49abb38929102e5cb0c0e3
[43]: https://github.com/Xunnamius/cli-utils/commit/6e8e5cb5235f6adf38b44ca6907e4e1ccab05d85
[44]: https://github.com/Xunnamius/cli-utils/commit/3c397089709d86ee446d9bdacaa019e22675c8ab
[45]: https://github.com/Xunnamius/cli-utils/commit/c7a284e51ef5349c2f43c26fe07feb15a870a5a3
[46]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.0.1...@-xun/cli@1.1.0
[47]: https://github.com/Xunnamius/cli-utils/commit/caf1d74e366c1a64e9bac76fadfeeb54b974c17e
[48]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.1.1...@-xun/cli@1.1.2
[49]: https://github.com/Xunnamius/cli-utils/commit/f690733445198491a679d615c5aa719695b3fda3
[50]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.1.0...@-xun/cli@1.1.1
[51]: https://github.com/Xunnamius/cli-utils/commit/d7dd85e25599a2735f7dfb4b141e117f83dc5bbd
[52]: https://github.com/Xunnamius/cli-utils/commit/28fc0782adb521af45732407f4551061bcd3f770
[53]: https://github.com/Xunnamius/cli-utils/compare/118cc97de27374bcd26e43f836c2d837aa9f46f4...@-xun/cli@1.0.0
[54]: https://github.com/Xunnamius/cli-utils/commit/118cc97de27374bcd26e43f836c2d837aa9f46f4
[55]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.0.0...@-xun/cli@1.0.1
[56]: https://github.com/Xunnamius/cli-utils/commit/74bfa47fc80f4ebda9a4e0fb9b2b0d112ef3baed
