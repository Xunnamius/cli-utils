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

### 🏗️ Patch @-xun/cli[@2.0.7][10] (2025-07-10)

#### ⚙️ Build System

- **deps:** bump rejoinder from 2.0.1 to 2.0.2 ([7202f95][11])
- **package:** use sane values for peer dependencies ([00e0e41][12])

<br />

### 🏗️ Patch @-xun/cli[@2.0.6][13] (2025-07-10)

#### ⚙️ Build System

- **deps:** bump @-xun/error from 1.1.4 to 1.1.6 ([d2e37e8][14])
- **deps:** bump @black-flag/checks from 2.0.1 to 2.0.2 ([a714a08][15])
- **deps:** bump @black-flag/core from 3.0.2 to 3.0.3 ([e78865a][16])
- **deps:** bump @black-flag/extensions from 3.1.2 to 3.1.3 ([3f1af8b][17])
- **package:** add @-xun/error dependency ([178d2e9][18])
- **package:** integrate @-xun/error dependency ([c0def9b][19])
- **package:** use sane values for peer dependencies ([15316c3][20])
- **package:** use saner peer dependencies configuration ([365b8be][21])

<br />

### 🏗️ Patch @-xun/cli[@2.0.5][22] (2025-07-08)

#### ⚙️ Build System

- **deps:** bump core-js from 3.43.0 to 3.44.0 ([3cc8696][23])
- **package:** update peer dependencies ([6b93cf8][24])

<br />

### 🏗️ Patch @-xun/cli[@2.0.4][25] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump @-xun/project-types from 2.0.0 to 2.0.1 ([bd60e98][26])
- **deps:** bump @black-flag/checks from 2.0.0 to 2.0.1 ([6de8c33][27])
- **deps:** bump @black-flag/core from 3.0.1 to 3.0.2 ([72c06d4][28])
- **deps:** bump @black-flag/extensions from 3.1.0 to 3.1.2 ([aae557a][29])
- **deps:** bump core-js from 3.42.0 to 3.43.0 ([4368fac][30])
- **deps:** bump rejoinder from 1.2.5 to 2.0.1 ([e02b2fb][31])

<br />

### 🏗️ Patch @-xun/cli[@2.0.3][32] (2025-05-31)

#### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.4 to 2.0.0 ([5a336c8][33])
- **deps:** bump @black-flag/core from 3.0.0 to 3.0.1 ([ee3b622][34])

<br />

### 🏗️ Patch @-xun/cli[@2.0.2][35] (2025-05-28)

#### ⚙️ Build System

- **deps:** bump @black-flag/extensions from 3.0.1 to 3.1.0 ([9eb962e][36])

<br />

### 🏗️ Patch @-xun/cli[@2.0.1][37] (2025-05-28)

#### ⚙️ Build System

- **deps:** bump @black-flag/extensions from 3.0.0 to 3.0.1 ([f1e1f91][38])

<br />

## @-xun/cli[@1.3.0][39] (2025-03-17)

### ✨ Features

- Enable `enableAutomaticSorting` option by default for `withBuilderExtensions` ([4921132][40])

### ⚙️ Build System

- **deps:** bump @black-flag/checks from 1.0.0 to 1.0.1 ([f0c2f91][41])
- **deps:** bump @black-flag/core from 2.0.0 to 2.0.1 ([20fbf60][42])
- **deps:** bump @black-flag/extensions from 2.0.0 to 2.1.0 ([fdaf33c][43])
- **deps:** bump core-js from 3.40.0 to 3.41.0 ([4c8a07a][44])

<br />

### 🏗️ Patch @-xun/cli[@1.3.2][45] (2025-03-20)

#### ⚙️ Build System

- **deps:** bump @black-flag/extensions from 2.2.0 to 2.2.1 ([58357e0][46])

<br />

### 🏗️ Patch @-xun/cli[@1.3.1][47] (2025-03-19)

#### 🪄 Fixes

- **src:** retire bfe cross-talk bug workaround since it was fixed upstream ([96516a9][48])

#### ⚙️ Build System

- **deps:** bump @black-flag/core from 2.0.1 to 2.0.2 ([2d30595][49])
- **deps:** bump @black-flag/extensions from 2.1.0 to 2.2.0 ([ab901b2][50])

<br />

## @-xun/cli[@1.2.0][51] (2025-03-15)

### ✨ Features

- **src:** re-export @black-flag/checks ([c6dc62e][52])

### 🪄 Fixes

- **src:** use "%O" when outputting error via debug ([96e8f03][53])

### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.2 to 1.0.4 ([78495e7][54])
- **deps:** bump @black-flag/core from 1.3.2 to 2.0.0 ([9968b47][55])
- **deps:** bump @black-flag/extensions from 1.0.2 to 2.0.0 ([ac5815c][56])
- **deps:** bump type-fest from 4.35.0 to 4.37.0 ([2a3dd74][57])
- **package:** install @black-flag/checks ([6e8e5cb][58])
- **package:** update @-xun/symbiote to 2.0.0 ([3c39708][59])

### 🔥 Reverted

- _"build(deps): bump core-js from 3.40.0 to 3.41.0"_ ([c7a284e][60])

<br />

## @-xun/cli[@1.1.0][61] (2025-02-17)

### ✨ Features

- Export all @black-flag/\* exports from index entry point ([caf1d74][62])

<br />

### 🏗️ Patch @-xun/cli[@1.1.2][63] (2025-02-21)

#### ⚙️ Build System

- Update rejoinder to 1.2.5 ([f690733][64])

<br />

### 🏗️ Patch @-xun/cli[@1.1.1][65] (2025-02-20)

#### 🪄 Fixes

- Properly handle optional nature of the rejoinder-listr2 peer dependency ([d7dd85e][66])

#### ⚙️ Build System

- **package:** move type-fest into prod dependencies ([28fc078][67])

<br />

## @-xun/cli[@1.0.0][68] (2025-02-17)

### ✨ Features

- Land initial @-xun/cli implementation (factored out from symbiote) ([118cc97][69])

<br />

### 🏗️ Patch @-xun/cli[@1.0.1][70] (2025-02-17)

#### 🪄 Fixes

- **src:** export `CliErrorMessage` ([74bfa47][71])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.3.2...@-xun/cli@2.0.0
[4]: https://github.com/Xunnamius/cli-utils/commit/75d30bf16362f038ca36f5aa043cdc3ec3a3db0a
[5]: https://github.com/Xunnamius/cli-utils/commit/7ae890c30951e215362fe394ce1a68e54686b41c
[6]: https://github.com/Xunnamius/cli-utils/commit/4a2593987b73206f9c08f1319bd4efc708cbc428
[7]: https://github.com/Xunnamius/cli-utils/commit/27f1ba7bb51e8ba248d0ad57f67c0b7f87a38e7f
[8]: https://github.com/Xunnamius/cli-utils/commit/e3c11a7b57fd1522147588b2879220cae946b075
[9]: https://github.com/Xunnamius/cli-utils/commit/9f931815fdc9c2ac298ecaacf937edd135e18759
[10]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@2.0.6...@-xun/cli@2.0.7
[11]: https://github.com/Xunnamius/cli-utils/commit/7202f95bea81ba825deb7e3f50da04a03a2b861b
[12]: https://github.com/Xunnamius/cli-utils/commit/00e0e41bdc381cca00e28f0fc2615d6c59c8e10f
[13]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@2.0.5...@-xun/cli@2.0.6
[14]: https://github.com/Xunnamius/cli-utils/commit/d2e37e8742086fa8b639b64be17dbcbfd1107819
[15]: https://github.com/Xunnamius/cli-utils/commit/a714a08e57dc314c4ccba6c17f49288c29cbd986
[16]: https://github.com/Xunnamius/cli-utils/commit/e78865a4802fdad1312bf66dfc768481904f5a74
[17]: https://github.com/Xunnamius/cli-utils/commit/3f1af8b87cca609d554888ab424f6b1870c02ca0
[18]: https://github.com/Xunnamius/cli-utils/commit/178d2e9b48aa6bd00e1202f1a0ceae1b03f9ca37
[19]: https://github.com/Xunnamius/cli-utils/commit/c0def9bfc356e611437328d29969b8140f590f52
[20]: https://github.com/Xunnamius/cli-utils/commit/15316c3393332af213a4a54d90486a2e6ded314d
[21]: https://github.com/Xunnamius/cli-utils/commit/365b8be0ab47fc803b8d87e878dbe1ee1467f511
[22]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@2.0.4...@-xun/cli@2.0.5
[23]: https://github.com/Xunnamius/cli-utils/commit/3cc86964358ec053eb3724e5f9d37d09e127d364
[24]: https://github.com/Xunnamius/cli-utils/commit/6b93cf888e959c0bfaeb913f8b2792a3aa1bc11d
[25]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@2.0.3...@-xun/cli@2.0.4
[26]: https://github.com/Xunnamius/cli-utils/commit/bd60e98a032d8e213732e5f9a0a040796381b902
[27]: https://github.com/Xunnamius/cli-utils/commit/6de8c33d7d13aada2af0477f153ed98b402d939f
[28]: https://github.com/Xunnamius/cli-utils/commit/72c06d4d1879b014d2307be1976253daf17fa999
[29]: https://github.com/Xunnamius/cli-utils/commit/aae557a63291b938c140e170d8152c1458ac5b1f
[30]: https://github.com/Xunnamius/cli-utils/commit/4368facb7dbcabd57cfb6afe8e757529b11b02c4
[31]: https://github.com/Xunnamius/cli-utils/commit/e02b2fbcc45bfb6d19b2337b12d84d8720176fe9
[32]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@2.0.2...@-xun/cli@2.0.3
[33]: https://github.com/Xunnamius/cli-utils/commit/5a336c837a38881cf0f2c5dfafcc370d8300c63f
[34]: https://github.com/Xunnamius/cli-utils/commit/ee3b62284e42b3dfc69798faf8a643636a01bfee
[35]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@2.0.1...@-xun/cli@2.0.2
[36]: https://github.com/Xunnamius/cli-utils/commit/9eb962e29a2804ff653f1668cd16863e2dfb94f1
[37]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@2.0.0...@-xun/cli@2.0.1
[38]: https://github.com/Xunnamius/cli-utils/commit/f1e1f91ccac79f89774d19b8f650971d80b8b80a
[39]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.2.0...@-xun/cli@1.3.0
[40]: https://github.com/Xunnamius/cli-utils/commit/492113245a1cddd75b67bff429c0a7ee0f3d224a
[41]: https://github.com/Xunnamius/cli-utils/commit/f0c2f916e11660cbfab0e6fdc410985d8b0697bf
[42]: https://github.com/Xunnamius/cli-utils/commit/20fbf60dc8093bd60d27900c5c8fa429ecf8ee4b
[43]: https://github.com/Xunnamius/cli-utils/commit/fdaf33ca37f258d35cea45a4cbf82bc7c1652626
[44]: https://github.com/Xunnamius/cli-utils/commit/4c8a07a3253b8e71eea735d96e170fe64b5f2b35
[45]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.3.1...@-xun/cli@1.3.2
[46]: https://github.com/Xunnamius/cli-utils/commit/58357e0710d76ce0563ca5e52e487c13b073afdd
[47]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.3.0...@-xun/cli@1.3.1
[48]: https://github.com/Xunnamius/cli-utils/commit/96516a981b0fba7a1003f8a30f7f4ee0565bfe85
[49]: https://github.com/Xunnamius/cli-utils/commit/2d30595850a74a6f060f64470af3e84b1c553c4b
[50]: https://github.com/Xunnamius/cli-utils/commit/ab901b24738fb866e8de58bd992de105e66c249e
[51]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.1.2...@-xun/cli@1.2.0
[52]: https://github.com/Xunnamius/cli-utils/commit/c6dc62e050d1e4ac974e25c076edd1a80c46e054
[53]: https://github.com/Xunnamius/cli-utils/commit/96e8f03b6fb4a27d95c08826e8a2d8f1a4284d73
[54]: https://github.com/Xunnamius/cli-utils/commit/78495e7368132959edf4f56e98ce96602c8800c3
[55]: https://github.com/Xunnamius/cli-utils/commit/9968b472b02b16c69dbc5e2ae48ea3dc823de08f
[56]: https://github.com/Xunnamius/cli-utils/commit/ac5815c79558c732596e659d6cc4f8da157a3575
[57]: https://github.com/Xunnamius/cli-utils/commit/2a3dd74ee54a0ee76b49abb38929102e5cb0c0e3
[58]: https://github.com/Xunnamius/cli-utils/commit/6e8e5cb5235f6adf38b44ca6907e4e1ccab05d85
[59]: https://github.com/Xunnamius/cli-utils/commit/3c397089709d86ee446d9bdacaa019e22675c8ab
[60]: https://github.com/Xunnamius/cli-utils/commit/c7a284e51ef5349c2f43c26fe07feb15a870a5a3
[61]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.0.1...@-xun/cli@1.1.0
[62]: https://github.com/Xunnamius/cli-utils/commit/caf1d74e366c1a64e9bac76fadfeeb54b974c17e
[63]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.1.1...@-xun/cli@1.1.2
[64]: https://github.com/Xunnamius/cli-utils/commit/f690733445198491a679d615c5aa719695b3fda3
[65]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.1.0...@-xun/cli@1.1.1
[66]: https://github.com/Xunnamius/cli-utils/commit/d7dd85e25599a2735f7dfb4b141e117f83dc5bbd
[67]: https://github.com/Xunnamius/cli-utils/commit/28fc0782adb521af45732407f4551061bcd3f770
[68]: https://github.com/Xunnamius/cli-utils/compare/118cc97de27374bcd26e43f836c2d837aa9f46f4...@-xun/cli@1.0.0
[69]: https://github.com/Xunnamius/cli-utils/commit/118cc97de27374bcd26e43f836c2d837aa9f46f4
[70]: https://github.com/Xunnamius/cli-utils/compare/@-xun/cli@1.0.0...@-xun/cli@1.0.1
[71]: https://github.com/Xunnamius/cli-utils/commit/74bfa47fc80f4ebda9a4e0fb9b2b0d112ef3baed
