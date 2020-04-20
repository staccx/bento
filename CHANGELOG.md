## [10.0.1-alpha.39](https://github.com/staccx/bento/compare/v10.0.1-alpha.38...v10.0.1-alpha.39) (2020-04-20)


### Bug Fixes

* **components:** fix modal backdrop click + refactor to function ([94d4b96](https://github.com/staccx/bento/commit/94d4b96))
* **hooks:** let to const ([720e6df](https://github.com/staccx/bento/commit/720e6df))
* **hooks:** usePostalCode can now take integers ([4ea14cf](https://github.com/staccx/bento/commit/4ea14cf))


### Features

* **theming:** add logger and setLevel. Log moar ([5edd8c2](https://github.com/staccx/bento/commit/5edd8c2))
* **utils:** add utils for loglevel handling ([6bf7860](https://github.com/staccx/bento/commit/6bf7860))



## [10.0.1-alpha.38](https://github.com/staccx/bento/compare/v10.0.1-alpha.37...v10.0.1-alpha.38) (2020-04-16)


### Bug Fixes

* **hooks:** useBrregsearch now support org numbers ([b71f2b4](https://github.com/staccx/bento/commit/b71f2b4))



## [10.0.1-alpha.37](https://github.com/staccx/bento/compare/v10.0.1-alpha.36...v10.0.1-alpha.37) (2020-04-03)


### Bug Fixes

* **i18n:** fix missing key handler bug ([2df5e75](https://github.com/staccx/bento/commit/2df5e75))



## [10.0.1-alpha.36](https://github.com/staccx/bento/compare/v10.0.1-alpha.35...v10.0.1-alpha.36) (2020-04-03)



## [10.0.1-alpha.35](https://github.com/staccx/bento/compare/v10.0.1-alpha.34...v10.0.1-alpha.35) (2020-04-03)


### Bug Fixes

* **i18n:** fallback should occur if t is null ([e84169a](https://github.com/staccx/bento/commit/e84169a))



## [10.0.1-alpha.34](https://github.com/staccx/bento/compare/v10.0.1-alpha.33...v10.0.1-alpha.34) (2020-04-03)


### Bug Fixes

* **i18n:** transform prop name ([59221a1](https://github.com/staccx/bento/commit/59221a1))


### Features

* **i18n:** add fallback to translate function ([d92112c](https://github.com/staccx/bento/commit/d92112c))



## [10.0.1-alpha.33](https://github.com/staccx/bento/compare/v10.0.1-alpha.32...v10.0.1-alpha.33) (2020-04-01)


### Bug Fixes

* **sanity:** defeat! use dodds ([c8e69a7](https://github.com/staccx/bento/commit/c8e69a7))



## [10.0.1-alpha.32](https://github.com/staccx/bento/compare/v10.0.1-alpha.31...v10.0.1-alpha.32) (2020-04-01)


### Bug Fixes

* memoize object dependency ([71b36e0](https://github.com/staccx/bento/commit/71b36e0))



## [10.0.1-alpha.31](https://github.com/staccx/bento/compare/v10.0.1-alpha.30...v10.0.1-alpha.31) (2020-04-01)


### Bug Fixes

* no longer dep on client ([7635853](https://github.com/staccx/bento/commit/7635853))



## [10.0.1-alpha.30](https://github.com/staccx/bento/compare/v10.0.1-alpha.29...v10.0.1-alpha.30) (2020-04-01)


### Features

* **sanity:** add useSanityQuery hook. memoize and expose client ([19f53c8](https://github.com/staccx/bento/commit/19f53c8))



## [10.0.1-alpha.29](https://github.com/staccx/bento/compare/v10.0.1-alpha.28...v10.0.1-alpha.29) (2020-04-01)


### Features

* **i18n:** add resource reducer ([3b8e7d2](https://github.com/staccx/bento/commit/3b8e7d2))



## [10.0.1-alpha.28](https://github.com/staccx/bento/compare/v10.0.1-alpha.27...v10.0.1-alpha.28) (2020-03-31)


### Bug Fixes

* **bento:** removed log for phoneinput ([05579e1](https://github.com/staccx/bento/commit/05579e1))
* **components:** drill variant to modal close button ([f3dd18b](https://github.com/staccx/bento/commit/f3dd18b))



## [10.0.1-alpha.27](https://github.com/staccx/bento/compare/v10.0.1-alpha.26...v10.0.1-alpha.27) (2020-03-26)


### Bug Fixes

* **bento:** countrycode and select simple ([c57c149](https://github.com/staccx/bento/commit/c57c149))
* **bento:** update snapshot for selectsimple ([b815057](https://github.com/staccx/bento/commit/b815057))



## [10.0.1-alpha.26](https://github.com/staccx/bento/compare/v10.0.1-alpha.25...v10.0.1-alpha.26) (2020-03-18)


### Bug Fixes

* **components:** expand title to id ([63722ef](https://github.com/staccx/bento/commit/63722ef))
* **openid:** useLogout now returns function ([beab282](https://github.com/staccx/bento/commit/beab282))


### Features

* **openid:** add useCallbackLogin. refactor Callbacklogin ([6328f25](https://github.com/staccx/bento/commit/6328f25))
* **openid:** add useCallbackLoginSilent, refactor CallbackLoginSilent ([0e3c027](https://github.com/staccx/bento/commit/0e3c027))
* **openid:** add useCallbackLogut, refactor CallbackLogout ([ecb4c56](https://github.com/staccx/bento/commit/ecb4c56))
* **openid:** add useLogout, refactor Logout ([f762346](https://github.com/staccx/bento/commit/f762346))



## [10.0.1-alpha.25](https://github.com/staccx/bento/compare/v10.0.1-alpha.24...v10.0.1-alpha.25) (2020-03-17)


### Features

* **openid:** add callbacks to callback login ([2c08200](https://github.com/staccx/bento/commit/2c08200))



## [10.0.1-alpha.24](https://github.com/staccx/bento/compare/v10.0.1-alpha.23...v10.0.1-alpha.24) (2020-03-16)


### Bug Fixes

* **openid:** made fetchToken memoized ([aab4ba2](https://github.com/staccx/bento/commit/aab4ba2))



## [10.0.1-alpha.23](https://github.com/staccx/bento/compare/v10.0.1-alpha.22...v10.0.1-alpha.23) (2020-03-16)



## [10.0.1-alpha.22](https://github.com/staccx/bento/compare/v10.0.1-alpha.21...v10.0.1-alpha.22) (2020-03-16)


### Bug Fixes

* namespace ([8a95f10](https://github.com/staccx/bento/commit/8a95f10))



## [10.0.1-alpha.21](https://github.com/staccx/bento/compare/v10.0.1-alpha.20...v10.0.1-alpha.21) (2020-03-16)


### Bug Fixes

* **i18n:** fix issue where dev was made fallbackNS ([5bbd652](https://github.com/staccx/bento/commit/5bbd652))


### Features

* **open-id:** added loggers to CBLoginSilent, callbackLogout & Logout ([567ab61](https://github.com/staccx/bento/commit/567ab61))
* **open-id:** added logging for open-id hooks ([e4abfc1](https://github.com/staccx/bento/commit/e4abfc1))



## [10.0.1-alpha.20](https://github.com/staccx/bento/compare/v10.0.1-alpha.19...v10.0.1-alpha.20) (2020-03-16)



## [10.0.1-alpha.19](https://github.com/staccx/bento/compare/v10.0.1-alpha.18...v10.0.1-alpha.19) (2020-03-13)


### Bug Fixes

* **bento:** updated to correct import statements ([46f3ae9](https://github.com/staccx/bento/commit/46f3ae9))
* **components:** fix default value size on Box ([35069d6](https://github.com/staccx/bento/commit/35069d6))
* **openid:** fix loglevels and refactor ([5db4d05](https://github.com/staccx/bento/commit/5db4d05))
* **storybook:** refactor stories using slider to new slider ([a6286b7](https://github.com/staccx/bento/commit/a6286b7))


### Features

* **components:** all source code displayed in storybook ([070a7fe](https://github.com/staccx/bento/commit/070a7fe))
* **theming:** add fontSize field to theme. add pxToRem ([91288d9](https://github.com/staccx/bento/commit/91288d9))
* **theming:** deprecating convenience methods ([1a28b26](https://github.com/staccx/bento/commit/1a28b26))
* **theming:** deprecating convenience methods for spcaing ([f331a6f](https://github.com/staccx/bento/commit/f331a6f))



## [10.0.1-alpha.18](https://github.com/staccx/bento/compare/v10.0.1-alpha.17...v10.0.1-alpha.18) (2020-03-06)


### Bug Fixes

* **components:** fix bug in Donut wrapper variant ([36189e8](https://github.com/staccx/bento/commit/36189e8))
* **components:** fix bug in SliderKeyBoardInput ([e69223e](https://github.com/staccx/bento/commit/e69223e))



## [10.0.1-alpha.17](https://github.com/staccx/bento/compare/v10.0.1-alpha.16...v10.0.1-alpha.17) (2020-03-05)


### Bug Fixes

* **bento:** Inputs should accept file as type ([e9e75b6](https://github.com/staccx/bento/commit/e9e75b6))
* **components:** pass down variant in Donut ([5633e37](https://github.com/staccx/bento/commit/5633e37))
* **storybook:** fix example data ([71a9e93](https://github.com/staccx/bento/commit/71a9e93))


### Features

* **components:** add componentCreateFactory to List ([4f80c29](https://github.com/staccx/bento/commit/4f80c29))



## [10.0.1-alpha.16](https://github.com/staccx/bento/compare/v10.0.1-alpha.15...v10.0.1-alpha.16) (2020-03-02)


### Features

* **hooks:** export hooks from bento.js ([4dabfc0](https://github.com/staccx/bento/commit/4dabfc0))
* **theming:** remove unused factory function ([5f48e6e](https://github.com/staccx/bento/commit/5f48e6e))



## [10.0.1-alpha.15](https://github.com/staccx/bento/compare/v10.0.1-alpha.14...v10.0.1-alpha.15) (2020-03-01)


### Bug Fixes

* **components:** remove unecessary theme with default props ([4a96c5b](https://github.com/staccx/bento/commit/4a96c5b))
* **theming:** multi theme support in new paradigm ([61e05dd](https://github.com/staccx/bento/commit/61e05dd))



## [10.0.1-alpha.14](https://github.com/staccx/bento/compare/v10.0.1-alpha.13...v10.0.1-alpha.14) (2020-02-28)


### Features

* **components:** add createVariants to all components ([b73705f](https://github.com/staccx/bento/commit/b73705f))
* **components:** add createVariants to Anchor ([cdd3b0e](https://github.com/staccx/bento/commit/cdd3b0e))



## [10.0.1-alpha.13](https://github.com/staccx/bento/compare/v10.0.1-alpha.12...v10.0.1-alpha.13) (2020-02-27)


### Bug Fixes

* **formatting:** remove support for experimental unit style ([a9f416d](https://github.com/staccx/bento/commit/a9f416d))
* **storybook:** fixes [#3](https://github.com/staccx/bento/issues/3) and resets variants when unmounting ([90a7f99](https://github.com/staccx/bento/commit/90a7f99))
* **theming:** fix theming add styles to keyname ([6bcde96](https://github.com/staccx/bento/commit/6bcde96))


### Features

* **components:** add new ThemeProvider ([09f51e2](https://github.com/staccx/bento/commit/09f51e2))
* **components:** add ThemeProvider to exports ([93a623a](https://github.com/staccx/bento/commit/93a623a))
* **components:** alert now has createVariants ([9faa783](https://github.com/staccx/bento/commit/9faa783))
* **theming:** add function to allow componennts to have createVariants ([351103f](https://github.com/staccx/bento/commit/351103f))
* **theming:** add instance to export ([626f7f0](https://github.com/staccx/bento/commit/626f7f0))



## [10.0.1-alpha.12](https://github.com/staccx/bento/compare/v10.0.1-alpha.11...v10.0.1-alpha.12) (2020-02-24)


### Bug Fixes

* **components:** fix Input in tests ([9b6fbf4](https://github.com/staccx/bento/commit/9b6fbf4))
* **components:** image test ([40a712e](https://github.com/staccx/bento/commit/40a712e))
* **components:** text & widowFix ([8ee927a](https://github.com/staccx/bento/commit/8ee927a))
* **components:** widowFix ([0c0308b](https://github.com/staccx/bento/commit/0c0308b))
* **i18n:** handle a few deps issues ([91a8546](https://github.com/staccx/bento/commit/91a8546))
* **theming:** remove superfluous null checks ([9bb05ab](https://github.com/staccx/bento/commit/9bb05ab))


### Features

* **bento:** tests for radioPillItem & RadioPill ([6d5496e](https://github.com/staccx/bento/commit/6d5496e))
* **bento:** tests for Slider ([917e9b7](https://github.com/staccx/bento/commit/917e9b7))
* **checkgroup:** tests for checkGroup ([88a20fb](https://github.com/staccx/bento/commit/88a20fb))
* **formatting:** adding function formatNumber ([0dcb3d6](https://github.com/staccx/bento/commit/0dcb3d6))



## [10.0.1-alpha.11](https://github.com/staccx/bento/compare/v10.0.1-alpha.10...v10.0.1-alpha.11) (2020-02-21)


### Bug Fixes

* **components:** fix wrong ref ([ef42253](https://github.com/staccx/bento/commit/ef42253))


### Features

* **bento:** tests for SelectSimple ([6673622](https://github.com/staccx/bento/commit/6673622))



## [10.0.1-alpha.10](https://github.com/staccx/bento/compare/v10.0.1-alpha.9...v10.0.1-alpha.10) (2020-02-21)


### Bug Fixes

* **bento:** birthDateInput now working as expected ([7d3b7a9](https://github.com/staccx/bento/commit/7d3b7a9))
* **birthdateinput:** add dep to useEffect ([ac631e7](https://github.com/staccx/bento/commit/ac631e7))
* **hooks:** useBrRegSearch update to new api ([8c463c6](https://github.com/staccx/bento/commit/8c463c6))
* **i18n:** fix getComponent when item is null ([ed2d081](https://github.com/staccx/bento/commit/ed2d081))
* **storybook:** added rerender import ([2c1b816](https://github.com/staccx/bento/commit/2c1b816))
* **storybook:** addons back to origin ([ef39de6](https://github.com/staccx/bento/commit/ef39de6))
* **storybook:** addons now in manager ([f8e5f42](https://github.com/staccx/bento/commit/f8e5f42))
* **storybook:** adjusted import statements ([febcfdd](https://github.com/staccx/bento/commit/febcfdd))
* **storybook:** draw animation works ([97d4b1e](https://github.com/staccx/bento/commit/97d4b1e))
* **storybook:** export draw animation ([a4e60e4](https://github.com/staccx/bento/commit/a4e60e4))
* **storybook:** fix stories for box ([71c0424](https://github.com/staccx/bento/commit/71c0424))
* **storybook:** improve newbadge docs ([c832c86](https://github.com/staccx/bento/commit/c832c86))
* **storybook:** modal story now working ([6862395](https://github.com/staccx/bento/commit/6862395))
* **storybook:** move register adddon functions to manager app ([1050741](https://github.com/staccx/bento/commit/1050741))
* **storybook:** number as progress from slider ([424c0de](https://github.com/staccx/bento/commit/424c0de))
* **storybook:** progress and threshold for progressbar changed to number ([315de8e](https://github.com/staccx/bento/commit/315de8e))
* **storybook:** working story for usePostalCode ([f4b6c81](https://github.com/staccx/bento/commit/f4b6c81))


### Features

* **bento:** formatting input birthdateInput ([b50fbf0](https://github.com/staccx/bento/commit/b50fbf0))
* **bento:** snapshots and tests for Donut/themeProps ([53e9a13](https://github.com/staccx/bento/commit/53e9a13))
* **bento:** snapshots for anchor/themeprops ([8137f3b](https://github.com/staccx/bento/commit/8137f3b))
* **bento:** snapshots for CodeRenderer ([30c8ac1](https://github.com/staccx/bento/commit/30c8ac1))
* **bento:** snapshotTests for Breadcrumb ([18e6fcd](https://github.com/staccx/bento/commit/18e6fcd))
* **bento:** test for CreditCardInput ([620ddff](https://github.com/staccx/bento/commit/620ddff))
* **bento:** tests for AccountInput ([e016a15](https://github.com/staccx/bento/commit/e016a15))
* **bento:** tests for BirthdateInput ([168f16f](https://github.com/staccx/bento/commit/168f16f))
* **bento:** tests for button/themeProps ([9276202](https://github.com/staccx/bento/commit/9276202))
* **bento:** tests for CheckBox ([633c37e](https://github.com/staccx/bento/commit/633c37e))
* **bento:** tests for CheckGroup ([b8e9f4f](https://github.com/staccx/bento/commit/b8e9f4f))
* **bento:** tests for Expand ([d217087](https://github.com/staccx/bento/commit/d217087))
* **bento:** tests for fileInput ([4933561](https://github.com/staccx/bento/commit/4933561))
* **bento:** tests for Form ([d802d47](https://github.com/staccx/bento/commit/d802d47))
* **bento:** tests for Fraction and KeyFigures ([1ccf68d](https://github.com/staccx/bento/commit/1ccf68d))
* **bento:** tests for Input ([7f6c078](https://github.com/staccx/bento/commit/7f6c078))
* **bento:** tests for Label ([361f63d](https://github.com/staccx/bento/commit/361f63d))
* **bento:** tests for Legend ([8ff50e1](https://github.com/staccx/bento/commit/8ff50e1))
* **bento:** tests for NationalIdInput ([e28ae60](https://github.com/staccx/bento/commit/e28ae60))
* **bento:** tests for Odometer ([638710d](https://github.com/staccx/bento/commit/638710d))
* **bento:** tests for PhoneInput ([43da306](https://github.com/staccx/bento/commit/43da306))
* **bento:** tests for PostalCodeInput ([5fddd64](https://github.com/staccx/bento/commit/5fddd64))
* **bento:** tests for ProgressBar ([2e5663f](https://github.com/staccx/bento/commit/2e5663f))
* **bento:** tests for RadioButton ([a06f2e5](https://github.com/staccx/bento/commit/a06f2e5))
* **beto:** tests for CurrencyInput ([db0e746](https://github.com/staccx/bento/commit/db0e746))
* **components:** extract themeProps. add createVariants functions ([cb7611c](https://github.com/staccx/bento/commit/cb7611c))
* **hooks:** add useCopyToClipboard. delete CopyToClipboard comp and hoc ([57985a2](https://github.com/staccx/bento/commit/57985a2))
* **storybok:** themeColors, now follows selected theme ([b800933](https://github.com/staccx/bento/commit/b800933))
* **storybook:** add breadcrumb to theme ([65279dc](https://github.com/staccx/bento/commit/65279dc))
* **storybook:** add intro text ([ff41712](https://github.com/staccx/bento/commit/ff41712))
* **storybook:** add knobs to Fraction ([1855258](https://github.com/staccx/bento/commit/1855258))
* **storybook:** add more fancy input styles to input ([eb29696](https://github.com/staccx/bento/commit/eb29696))
* **storybook:** add new theme ([f07db9b](https://github.com/staccx/bento/commit/f07db9b))
* **storybook:** add new theme ([88e6e06](https://github.com/staccx/bento/commit/88e6e06))
* **storybook:** add to howToBento ([f3caf8b](https://github.com/staccx/bento/commit/f3caf8b))
* **storybook:** add valueSlider for progressBar ([0dda4e6](https://github.com/staccx/bento/commit/0dda4e6))
* **storybook:** add variant decorator. add rerender tool ([bdf4391](https://github.com/staccx/bento/commit/bdf4391))
* **storybook:** add variants to progressbar ([988dac2](https://github.com/staccx/bento/commit/988dac2))
* **storybook:** added knobs to donut ([3ae5133](https://github.com/staccx/bento/commit/3ae5133))
* **storybook:** added new draw animation ([e64bb50](https://github.com/staccx/bento/commit/e64bb50))
* **storybook:** added Storybook theme ([fe20be7](https://github.com/staccx/bento/commit/fe20be7))
* **storybook:** donut now has slider for progress ([e1a8542](https://github.com/staccx/bento/commit/e1a8542))
* **storybook:** edit stories for useBrRegSearch ([dfc4c33](https://github.com/staccx/bento/commit/dfc4c33))
* **storybook:** edit useSearchStory ([8c66f9c](https://github.com/staccx/bento/commit/8c66f9c))
* **storybook:** fix how to bento ([ace2bc4](https://github.com/staccx/bento/commit/ace2bc4))
* **storybook:** fix story for useSearch ([8b0fc8d](https://github.com/staccx/bento/commit/8b0fc8d))
* **storybook:** intro|Bento now first page ([2347065](https://github.com/staccx/bento/commit/2347065))
* **storybook:** move stories for hooks ([9b3c1c5](https://github.com/staccx/bento/commit/9b3c1c5))
* **storybook:** remove autofocus example ([b13c16f](https://github.com/staccx/bento/commit/b13c16f))
* **storybook:** remove test-theme ([fe33d84](https://github.com/staccx/bento/commit/fe33d84))
* **storybook:** rewrite format date story ([ff88e5f](https://github.com/staccx/bento/commit/ff88e5f))
* **storybook:** storybook now has themeSwitcher ([639e763](https://github.com/staccx/bento/commit/639e763))
* **storybook:** useState now in Button ([83e887b](https://github.com/staccx/bento/commit/83e887b))
* **storybook:** variants for alert(Violet-tendencies) ([d53cb36](https://github.com/staccx/bento/commit/d53cb36))
* **theming:** add createVariantsFunctionFactory ([c67e97e](https://github.com/staccx/bento/commit/c67e97e))



## [10.0.1-alpha.9](https://github.com/staccx/bento/compare/v10.0.1-alpha.8...v10.0.1-alpha.9) (2020-02-13)


### Bug Fixes

* **components:** remove alpha from export ([7fced5c](https://github.com/staccx/bento/commit/7fced5c))



## [10.0.1-alpha.8](https://github.com/staccx/bento/compare/v10.0.1-alpha.7...v10.0.1-alpha.8) (2020-02-13)


### Bug Fixes

* **storybok:** expand ([8f8f358](https://github.com/staccx/bento/commit/8f8f358))
* **storybook:** added caret story ([e7b0e6b](https://github.com/staccx/bento/commit/e7b0e6b))
* **storybook:** added codewrapper and coderenderer ([6539465](https://github.com/staccx/bento/commit/6539465))
* **storybook:** added copytoclipboard story ([5611060](https://github.com/staccx/bento/commit/5611060))
* **storybook:** added new structure and stories ([215093e](https://github.com/staccx/bento/commit/215093e))
* **storybook:** adjusted story for layout and layoutitem ([9bcdf35](https://github.com/staccx/bento/commit/9bcdf35))
* **storybook:** adjusted texts for animation ([0c2cdd4](https://github.com/staccx/bento/commit/0c2cdd4))
* **storybook:** alert import ([9d61d46](https://github.com/staccx/bento/commit/9d61d46))
* **storybook:** fix AccountInput ([94c7ac6](https://github.com/staccx/bento/commit/94c7ac6))
* **storybook:** fix import ([c02ad5b](https://github.com/staccx/bento/commit/c02ad5b))
* **storybook:** menuitems ([1f01296](https://github.com/staccx/bento/commit/1f01296))
* **storybook:** removed breakout parent ([3d21ac2](https://github.com/staccx/bento/commit/3d21ac2))
* **storybook:** something is wonky with hidden: true for canvas ([89f8564](https://github.com/staccx/bento/commit/89f8564))
* **storybook:** start on Form + fix import ([ec0f562](https://github.com/staccx/bento/commit/ec0f562))
* storybook is working ([871e2ed](https://github.com/staccx/bento/commit/871e2ed))


### Features

* **storybook:**  added itemgroup story ([60d694d](https://github.com/staccx/bento/commit/60d694d))
* **storybook:** add knobs as searchstring useBrRegSearch ([43f8d14](https://github.com/staccx/bento/commit/43f8d14))
* **storybook:** added box layout story ([d7960ad](https://github.com/staccx/bento/commit/d7960ad))
* **storybook:** added check story ([119cc3b](https://github.com/staccx/bento/commit/119cc3b))
* **storybook:** added close story ([bdc3c8e](https://github.com/staccx/bento/commit/bdc3c8e))
* **storybook:** added five new authentication components ([09b50e9](https://github.com/staccx/bento/commit/09b50e9))
* **storybook:** added flag story ([2ca024f](https://github.com/staccx/bento/commit/2ca024f))
* **storybook:** added image story ([55b6ced](https://github.com/staccx/bento/commit/55b6ced))
* **storybook:** added import for donut + fix stories fraction ([1ffa353](https://github.com/staccx/bento/commit/1ffa353))
* **storybook:** added info story ([440c535](https://github.com/staccx/bento/commit/440c535))
* **storybook:** added layout story ([7af6275](https://github.com/staccx/bento/commit/7af6275))
* **storybook:** added pack and packitem story ([60b81b2](https://github.com/staccx/bento/commit/60b81b2))
* **storybook:** added questionmark story ([6231d2f](https://github.com/staccx/bento/commit/6231d2f))
* **storybook:** added story for animations ([1f91a74](https://github.com/staccx/bento/commit/1f91a74))
* **storybook:** added story for diviver ([1d8d587](https://github.com/staccx/bento/commit/1d8d587))
* **storybook:** added story for wrapper ([a1ee75b](https://github.com/staccx/bento/commit/a1ee75b))
* **storybook:** added success story ([492d0a1](https://github.com/staccx/bento/commit/492d0a1))
* **storybook:** added upload story ([1a61e11](https://github.com/staccx/bento/commit/1a61e11))
* **storybook:** added warning story ([7938dee](https://github.com/staccx/bento/commit/7938dee))
* **storybook:** button is now standard format ([b023069](https://github.com/staccx/bento/commit/b023069))
* **storybook:** emailInput + FileInput ([44e32f8](https://github.com/staccx/bento/commit/44e32f8))
* **storybook:** fix button stories ([620b17d](https://github.com/staccx/bento/commit/620b17d))
* **storybook:** fix odometer stories + props docs ([d655ac1](https://github.com/staccx/bento/commit/d655ac1))
* **storybook:** fix stories for Expand + expand.props docs ([1a91ab3](https://github.com/staccx/bento/commit/1a91ab3))
* **storybook:** fix stories for skeleton ([48d7df4](https://github.com/staccx/bento/commit/48d7df4))
* **storybook:** help file for stories + AccountInput ([0c792cf](https://github.com/staccx/bento/commit/0c792cf))
* **storybook:** how to bento story ([d82bb4e](https://github.com/staccx/bento/commit/d82bb4e))
* **storybook:** improve donut stories + propTypes ([d63baaf](https://github.com/staccx/bento/commit/d63baaf))
* **storybook:** improve progressbar stories ([74c9780](https://github.com/staccx/bento/commit/74c9780))
* **storybook:** improve stories for keyfigures + set defaultProps ([fd20bc2](https://github.com/staccx/bento/commit/fd20bc2))
* **storybook:** improved checkbox stories ([911d322](https://github.com/staccx/bento/commit/911d322))
* **storybook:** knobs now added and working in canvas, see progressBar ([79f63d2](https://github.com/staccx/bento/commit/79f63d2))
* **storybook:** loading moved from DataWiz to Laders + new stories ([09d4c1e](https://github.com/staccx/bento/commit/09d4c1e))
* **storybook:** logo ([52efa31](https://github.com/staccx/bento/commit/52efa31))
* **storybook:** nationalIdIpnut ([01d2de7](https://github.com/staccx/bento/commit/01d2de7))
* **storybook:** remove Canvas ([f3d3a6d](https://github.com/staccx/bento/commit/f3d3a6d))
* **storybook:** stories for Alert ([5cdad4d](https://github.com/staccx/bento/commit/5cdad4d))
* **storybook:** stories for Anchor + update proptypes for component ([3129bc4](https://github.com/staccx/bento/commit/3129bc4))
* **storybook:** stories for Birthdateinput ([a9e676f](https://github.com/staccx/bento/commit/a9e676f))
* **storybook:** stories for Breadcrumb + propTypes ([574d6b7](https://github.com/staccx/bento/commit/574d6b7))
* **storybook:** stories for Button ([4ecf4b0](https://github.com/staccx/bento/commit/4ecf4b0))
* **storybook:** stories for Checkbox ([93469a6](https://github.com/staccx/bento/commit/93469a6))
* **storybook:** stories for CheckBox ([c8bca47](https://github.com/staccx/bento/commit/c8bca47))
* **storybook:** stories for color & theme & formatCurrency ([6fe5659](https://github.com/staccx/bento/commit/6fe5659))
* **storybook:** stories for creditcardInput ([dd56cbf](https://github.com/staccx/bento/commit/dd56cbf))
* **storybook:** stories for CurrencyInput ([95158b2](https://github.com/staccx/bento/commit/95158b2))
* **storybook:** stories for dateFormat ([e12eea4](https://github.com/staccx/bento/commit/e12eea4))
* **storybook:** stories for Donut ([1f2ea1a](https://github.com/staccx/bento/commit/1f2ea1a))
* **storybook:** stories for Expand ([9d61e04](https://github.com/staccx/bento/commit/9d61e04))
* **storybook:** stories for ExpandList ([fc6d8d6](https://github.com/staccx/bento/commit/fc6d8d6))
* **storybook:** stories for formatDateDistance ([c11324c](https://github.com/staccx/bento/commit/c11324c))
* **storybook:** stories for formatName ([85a44a1](https://github.com/staccx/bento/commit/85a44a1))
* **storybook:** stories for fraction ([3517fb5](https://github.com/staccx/bento/commit/3517fb5))
* **storybook:** stories for FullScreenLoader ([1fa390b](https://github.com/staccx/bento/commit/1fa390b))
* **storybook:** stories for Heading ([68072d6](https://github.com/staccx/bento/commit/68072d6))
* **storybook:** stories for inlineList ([b228f05](https://github.com/staccx/bento/commit/b228f05))
* **storybook:** stories for input ([1d91608](https://github.com/staccx/bento/commit/1d91608))
* **storybook:** stories for keyfigures ([7403e0e](https://github.com/staccx/bento/commit/7403e0e))
* **storybook:** stories for label ([7342693](https://github.com/staccx/bento/commit/7342693))
* **storybook:** stories for Legend ([e91a421](https://github.com/staccx/bento/commit/e91a421))
* **storybook:** stories for LinkList ([545fe70](https://github.com/staccx/bento/commit/545fe70))
* **storybook:** stories for List ([8d26d61](https://github.com/staccx/bento/commit/8d26d61))
* **storybook:** stories for loading ([0dd5b32](https://github.com/staccx/bento/commit/0dd5b32))
* **storybook:** stories for Logo ([67f3552](https://github.com/staccx/bento/commit/67f3552))
* **storybook:** stories for maskFormat ([4ad9a93](https://github.com/staccx/bento/commit/4ad9a93))
* **storybook:** stories for Modal ([85c778c](https://github.com/staccx/bento/commit/85c778c))
* **storybook:** stories for Modal + delete Portal ([268ca19](https://github.com/staccx/bento/commit/268ca19))
* **storybook:** stories for newBadge ([959abd3](https://github.com/staccx/bento/commit/959abd3))
* **storybook:** stories for Odometer ([0a47901](https://github.com/staccx/bento/commit/0a47901))
* **storybook:** stories for paragraph ([63f5590](https://github.com/staccx/bento/commit/63f5590))
* **storybook:** stories for PhoneInput ([19c055c](https://github.com/staccx/bento/commit/19c055c))
* **storybook:** stories for PostalCodeInput ([4badd97](https://github.com/staccx/bento/commit/4badd97))
* **storybook:** stories for progressBar ([6f1e226](https://github.com/staccx/bento/commit/6f1e226))
* **storybook:** stories for radioButton ([2aa3b05](https://github.com/staccx/bento/commit/2aa3b05))
* **storybook:** stories for RadioPill ([1647bbb](https://github.com/staccx/bento/commit/1647bbb))
* **storybook:** stories for removeWhitespace ([55d1d4e](https://github.com/staccx/bento/commit/55d1d4e))
* **storybook:** stories for SelectSimple ([6e54497](https://github.com/staccx/bento/commit/6e54497))
* **storybook:** stories for Skeleton ([3c81408](https://github.com/staccx/bento/commit/3c81408))
* **storybook:** stories for Slider ([13c3c2e](https://github.com/staccx/bento/commit/13c3c2e))
* **storybook:** stories for SplitList ([0bfc544](https://github.com/staccx/bento/commit/0bfc544))
* **storybook:** stories for tag ([9a6acbf](https://github.com/staccx/bento/commit/9a6acbf))
* **storybook:** stories for Text ([6154974](https://github.com/staccx/bento/commit/6154974))
* **storybook:** stories for theme.color and colors ([9d21374](https://github.com/staccx/bento/commit/9d21374))
* **storybook:** stories for Toggle ([847497e](https://github.com/staccx/bento/commit/847497e))
* **storybook:** stories for turncate ([4705f91](https://github.com/staccx/bento/commit/4705f91))
* **storybook:** stories for useBrRegSearch ([1cfd04e](https://github.com/staccx/bento/commit/1cfd04e))
* **storybook:** stories for useSearch ([6a60064](https://github.com/staccx/bento/commit/6a60064))
* **storybook:** stories for WidowFix ([63c22bb](https://github.com/staccx/bento/commit/63c22bb))
* **storybook:** update splitList ([3277cf0](https://github.com/staccx/bento/commit/3277cf0))
* **storybook:** update template ([5b519bb](https://github.com/staccx/bento/commit/5b519bb))
* **storybook:** updated stories to new template ([c91309f](https://github.com/staccx/bento/commit/c91309f))
* enabled deployement to now ([2aa7520](https://github.com/staccx/bento/commit/2aa7520))



## [10.0.1-alpha.7](https://github.com/staccx/bento/compare/v10.0.1-alpha.6...v10.0.1-alpha.7) (2020-02-04)



## [10.0.1-alpha.6](https://github.com/staccx/bento/compare/v10.0.1-alpha.5...v10.0.1-alpha.6) (2020-02-04)



## [10.0.1-alpha.5](https://github.com/staccx/bento/compare/v10.0.1-alpha.4...v10.0.1-alpha.5) (2020-02-04)



## [10.0.1-alpha.4](https://github.com/staccx/bento/compare/v10.0.1-alpha.3...v10.0.1-alpha.4) (2020-02-04)


### Bug Fixes

* add missing package ([49c7f3a](https://github.com/staccx/bento/commit/49c7f3a))



## [10.0.1-alpha.3](https://github.com/staccx/bento/compare/v10.0.1-alpha.2...v10.0.1-alpha.3) (2020-02-04)


### Bug Fixes

* imports from replaced packages ([6f3b55e](https://github.com/staccx/bento/commit/6f3b55e))



## [10.0.1-alpha.2](https://github.com/staccx/bento/compare/v10.0.1-alpha.1...v10.0.1-alpha.2) (2020-02-04)


### Bug Fixes

* issues + move react to peer ([987251a](https://github.com/staccx/bento/commit/987251a))



## [10.0.1-alpha.1](https://github.com/staccx/bento/compare/v10.0.1-alpha.0...v10.0.1-alpha.1) (2020-02-03)


### Features

* add components and fix main ([22cca98](https://github.com/staccx/bento/commit/22cca98))
* package no longer private ([ed0026a](https://github.com/staccx/bento/commit/ed0026a))



## [10.0.1-alpha.0](https://github.com/staccx/bento/compare/v10.0.1-0...v10.0.1-alpha.0) (2020-02-02)



## [10.0.1-0](https://github.com/staccx/bento/compare/v9.5.0...v10.0.1-0) (2020-02-02)


### Bug Fixes

* fix git hooks not running ([24476e1](https://github.com/staccx/bento/commit/24476e1))
* **base:** add missing files ([c9239c3](https://github.com/staccx/bento/commit/c9239c3))
* **components:** fix import of HOC ([a2c0605](https://github.com/staccx/bento/commit/a2c0605))
* **hooks:** handle zero results in brRegSearch ([31bcc42](https://github.com/staccx/bento/commit/31bcc42))
* **hooks:** unset results if searchterm too short ([bc7c994](https://github.com/staccx/bento/commit/bc7c994))
* commitlint ([350ad88](https://github.com/staccx/bento/commit/350ad88))
* updated ([c722baf](https://github.com/staccx/bento/commit/c722baf))


### Features

* add swr and useRequest. add usePostalCode and implemented in PostalCodeInput ([59fbc0a](https://github.com/staccx/bento/commit/59fbc0a))
* export open id ns ([02940e0](https://github.com/staccx/bento/commit/02940e0))
* move base to root ([56f1388](https://github.com/staccx/bento/commit/56f1388))
* move utils ([67bd3a3](https://github.com/staccx/bento/commit/67bd3a3))
* stash ([1875437](https://github.com/staccx/bento/commit/1875437))
* storybook 5.3 ([df6c010](https://github.com/staccx/bento/commit/df6c010))
* storybook now works ([19cb604](https://github.com/staccx/bento/commit/19cb604))
* updated and husky ([16b6cb8](https://github.com/staccx/bento/commit/16b6cb8))
* updated storybook deps ([54dfc2f](https://github.com/staccx/bento/commit/54dfc2f))
* upgrade all the things 🔥 ([3d10130](https://github.com/staccx/bento/commit/3d10130))
* upgrade styled-components to latest ([1278a0f](https://github.com/staccx/bento/commit/1278a0f))
* **base:** removed lerna stuff and sunset animations ([6c242db](https://github.com/staccx/bento/commit/6c242db))
* **bento:** delete component testing ([8f37994](https://github.com/staccx/bento/commit/8f37994))
* **bento:** delete control-panel ([f2db644](https://github.com/staccx/bento/commit/f2db644))
* **bento:** delete feature-toggling ([7e5e5da](https://github.com/staccx/bento/commit/7e5e5da))
* **bento:** move formatting ([198b250](https://github.com/staccx/bento/commit/198b250))
* **bento:** move math ([43257e7](https://github.com/staccx/bento/commit/43257e7))
* **bento:** move open-id ([13900dc](https://github.com/staccx/bento/commit/13900dc))
* **bento:** remove code-generator ([61aa54b](https://github.com/staccx/bento/commit/61aa54b))
* **bento:** remove mr-x ([bef8690](https://github.com/staccx/bento/commit/bef8690))
* **bento:** remove nori ([e94aecc](https://github.com/staccx/bento/commit/e94aecc))
* **components:** remove combobox ([a3891b7](https://github.com/staccx/bento/commit/a3891b7))
* **components:** remove Select ([033ca05](https://github.com/staccx/bento/commit/033ca05))
* **hooks:** add useBrRegSearch hook ([2003af8](https://github.com/staccx/bento/commit/2003af8))



# [9.5.0](https://github.com/staccx/bento/compare/v9.4.0...v9.5.0) (2019-12-10)


### Features

* **base:** get new data on path change datafectcherfactory ([2695d0b](https://github.com/staccx/bento/commit/2695d0b))



# [9.4.0](https://github.com/staccx/bento/compare/v9.3.0...v9.4.0) (2019-11-28)


### Features

* **base:** add authentication icons ([6b7ca4d](https://github.com/staccx/bento/commit/6b7ca4d))
* **breadcrumb:** fix listItemLast in breadcrumb, themeProp ([86420a6](https://github.com/staccx/bento/commit/86420a6))
* **fundu-theme:** change logo to easybank. fix demo ([1c45348](https://github.com/staccx/bento/commit/1c45348))
* **nordea-theme:** add bodyText size ([e7a2c62](https://github.com/staccx/bento/commit/e7a2c62))
* **storybook:** added .md documentation for formatCurrency ([2e9d80f](https://github.com/staccx/bento/commit/2e9d80f))
* **storybook:** added docs to more stories ([4489eb8](https://github.com/staccx/bento/commit/4489eb8))
* **storybook:** added stories for anchor ++ and fixed CodeRenderer ([b08b69d](https://github.com/staccx/bento/commit/b08b69d))
* **storybook:** added stories for Combobox ([f223fec](https://github.com/staccx/bento/commit/f223fec))
* **storybook:** added stories for Form ([4e8aec7](https://github.com/staccx/bento/commit/4e8aec7))
* **storybook:** added stories for Select, SelectSimple, Slider ([ac8e245](https://github.com/staccx/bento/commit/ac8e245))
* **storybook:** added stories for XInput ([90127fb](https://github.com/staccx/bento/commit/90127fb))
* **storybook:** added stories from Skeleton ([f424615](https://github.com/staccx/bento/commit/f424615))
* **storybook:** better stories for select ([aca2664](https://github.com/staccx/bento/commit/aca2664))
* **variant:** add variant to CopyToClipboardComponent ([e05696a](https://github.com/staccx/bento/commit/e05696a))



# [9.3.0](https://github.com/staccx/bento/compare/v9.2.0...v9.3.0) (2019-08-30)


### Bug Fixes

* **base:** remove infinite loading state on empty data ([c8b7a87](https://github.com/staccx/bento/commit/c8b7a87))


### Features

* **storybook:** added stories for Anchor, Breakcrumb, LinkList ([be3dc98](https://github.com/staccx/bento/commit/be3dc98))
* **storybook:** added stories for Logo & FullScreenLoader ([316da57](https://github.com/staccx/bento/commit/316da57))



# [9.2.0](https://github.com/staccx/bento/compare/v9.1.1...v9.2.0) (2019-08-28)


### Features

* **base:** add fetchToken prop to dataprovider ([9c71560](https://github.com/staccx/bento/commit/9c71560))
* **open-id:** add fetchToken function ([cd0fd51](https://github.com/staccx/bento/commit/cd0fd51))



## [9.1.1](https://github.com/staccx/bento/compare/v9.1.0...v9.1.1) (2019-08-14)


### Bug Fixes

* **base:** ref sent in is now set ([55a366a](https://github.com/staccx/bento/commit/55a366a))



# [9.1.0](https://github.com/staccx/bento/compare/v9.0.0...v9.1.0) (2019-08-05)


### Bug Fixes

* **base:** add missing dep ([43b0f33](https://github.com/staccx/bento/commit/43b0f33))



# [9.0.0](https://github.com/staccx/bento/compare/v9.0.0-alpha.57...v9.0.0) (2019-08-05)


### Bug Fixes

* **base:** updated story for data fetcher factory ([2e85e1e](https://github.com/staccx/bento/commit/2e85e1e))



# [9.0.0-alpha.57](https://github.com/staccx/bento/compare/v9.0.0-alpha.56...v9.0.0-alpha.57) (2019-07-11)



# [9.0.0-alpha.56](https://github.com/staccx/bento/compare/v9.0.0-alpha.55...v9.0.0-alpha.56) (2019-07-11)


### Features

* **base:** refactor data fetcher factory ([3959eee](https://github.com/staccx/bento/commit/3959eee))



# [9.0.0-alpha.55](https://github.com/staccx/bento/compare/v9.0.0-alpha.54...v9.0.0-alpha.55) (2019-07-11)



# [9.0.0-alpha.54](https://github.com/staccx/bento/compare/v9.0.0-alpha.53...v9.0.0-alpha.54) (2019-07-11)



# [9.0.0-alpha.53](https://github.com/staccx/bento/compare/v9.0.0-alpha.52...v9.0.0-alpha.53) (2019-07-10)


### Bug Fixes

* **open-id:** fix oidc log level ([fd4f2dc](https://github.com/staccx/bento/commit/fd4f2dc))



# [9.0.0-alpha.52](https://github.com/staccx/bento/compare/v9.0.0-alpha.50...v9.0.0-alpha.52) (2019-07-10)


### Bug Fixes

* **open-id:** add extraConfig prop to provider ([3163e0b](https://github.com/staccx/bento/commit/3163e0b))
* **open-id:** check for authority before creating signin request ([7519d27](https://github.com/staccx/bento/commit/7519d27))
* **open-id:** user initially loading ([d914099](https://github.com/staccx/bento/commit/d914099))



# [9.0.0-alpha.50](https://github.com/staccx/bento/compare/v9.0.0-alpha.49...v9.0.0-alpha.50) (2019-07-09)


### Features

* **open-id:** made url login use provider storage ([6cf24e3](https://github.com/staccx/bento/commit/6cf24e3))



# [9.0.0-alpha.49](https://github.com/staccx/bento/compare/v9.0.0-alpha.48...v9.0.0-alpha.49) (2019-07-09)


### Features

* **open-id:** add support for different storage. add loglevel ([4c93adb](https://github.com/staccx/bento/commit/4c93adb))



# [9.0.0-alpha.48](https://github.com/staccx/bento/compare/v9.0.0-alpha.47...v9.0.0-alpha.48) (2019-07-08)


### Bug Fixes

* **base:** fix ref bug ([cb3de40](https://github.com/staccx/bento/commit/cb3de40))



# [9.0.0-alpha.47](https://github.com/staccx/bento/compare/v9.0.0-alpha.46...v9.0.0-alpha.47) (2019-07-08)


### Bug Fixes

* **base:** theming/variants now works properly for Breadcrumb ([9d10d90](https://github.com/staccx/bento/commit/9d10d90))
* **bento:** fixed storybook require() ([0b444bc](https://github.com/staccx/bento/commit/0b444bc))
* **component-testing:** fix after api change ([77544d7](https://github.com/staccx/bento/commit/77544d7))


### Features

* **base:** add working animation for FullScreenLoader [wip] ([800c6be](https://github.com/staccx/bento/commit/800c6be))
* **base:** make FullScreenLoader styleable w/variants ([ab7f7d7](https://github.com/staccx/bento/commit/ab7f7d7))
* **base:** move sanity into base ([acec25f](https://github.com/staccx/bento/commit/acec25f))
* **base:** one line export. export SanityRichText ([1628e5b](https://github.com/staccx/bento/commit/1628e5b))
* **base:** sanity and i18n in glorious base ([7b1dab4](https://github.com/staccx/bento/commit/7b1dab4))
* **base:** updated transform to return value, not component ([9b79cf8](https://github.com/staccx/bento/commit/9b79cf8))
* **sanity:** delete ([e032f01](https://github.com/staccx/bento/commit/e032f01))
* **sanity-plugin-i18n:** add support for image in rich text ([4cb7875](https://github.com/staccx/bento/commit/4cb7875))



# [9.0.0-alpha.46](https://github.com/staccx/bento/compare/v9.0.0-alpha.45...v9.0.0-alpha.46) (2019-06-25)


### Bug Fixes

* **cli:** clean no longer deletes lock file ([6072e88](https://github.com/staccx/bento/commit/6072e88))
* **cli:** clean up ([53047ae](https://github.com/staccx/bento/commit/53047ae))



# [9.0.0-alpha.45](https://github.com/staccx/bento/compare/v9.0.0-alpha.44...v9.0.0-alpha.45) (2019-06-25)


### Features

* **sanity-plugin-i18n:** remove deps and build with project ([6bf18f4](https://github.com/staccx/bento/commit/6bf18f4))



# [9.0.0-alpha.44](https://github.com/staccx/bento/compare/v9.0.0-alpha.43...v9.0.0-alpha.44) (2019-06-25)


### Bug Fixes

* **base:** fix issue with i18n not falling back to null ([6611c7a](https://github.com/staccx/bento/commit/6611c7a))


### Features

* **base:** add FullScreenLoader [wip] ([fdfef8d](https://github.com/staccx/bento/commit/fdfef8d))
* **base:** getting loading messages to render in FullScreenLoader [wip] ([cae0c2d](https://github.com/staccx/bento/commit/cae0c2d))
* **bento:** clean circs ([6b9aa8e](https://github.com/staccx/bento/commit/6b9aa8e))
* **cli:** add new command watch ([93dbb86](https://github.com/staccx/bento/commit/93dbb86))
* **json-schema:** deleted ([19dc091](https://github.com/staccx/bento/commit/19dc091))



# [9.0.0-alpha.43](https://github.com/staccx/bento/compare/v9.0.0-alpha.42...v9.0.0-alpha.43) (2019-06-19)


### Features

* **base:** add i18n to base. deleted i18n package ([171e8b4](https://github.com/staccx/bento/commit/171e8b4))
* **base:** add i18n to base. deleted i18n package ([8dea3b2](https://github.com/staccx/bento/commit/8dea3b2))
* **component-testing:** updated with i18n components ([3a927c2](https://github.com/staccx/bento/commit/3a927c2))
* **sanity-plugin-i18n:** add support for namespacing ([9211432](https://github.com/staccx/bento/commit/9211432))



# [9.0.0-alpha.42](https://github.com/staccx/bento/compare/v9.0.0-alpha.41...v9.0.0-alpha.42) (2019-06-19)



# [9.0.0-alpha.41](https://github.com/staccx/bento/compare/v9.0.0-alpha.40...v9.0.0-alpha.41) (2019-06-18)


### Bug Fixes

* **base:** remove build:packages script reference ([d001fef](https://github.com/staccx/bento/commit/d001fef))
* **cli:** move dashIt to helpers ([27526b7](https://github.com/staccx/bento/commit/27526b7))
* **cli:** remove rollup and add nodemon ([00f4dee](https://github.com/staccx/bento/commit/00f4dee))


### Features

* **base:** fix useSearch ([f31be43](https://github.com/staccx/bento/commit/f31be43))
* **base:** some refactoring + add ccss property --full-width ([5e71431](https://github.com/staccx/bento/commit/5e71431))
* **component-testing:** add breadcrumb ([cf0d50b](https://github.com/staccx/bento/commit/cf0d50b))
* **component-testing:** just the last changes ([db706ef](https://github.com/staccx/bento/commit/db706ef))



# [9.0.0-alpha.40](https://github.com/staccx/bento/compare/v9.0.0-alpha.39...v9.0.0-alpha.40) (2019-06-17)


### Features

* **bento:** deleted apps and moved component.testing ([384c1af](https://github.com/staccx/bento/commit/384c1af))
* **component-testing:** testing new base component → WidowFix ([d551c14](https://github.com/staccx/bento/commit/d551c14))
* **eslint-config:** add env and fix globals ([4885598](https://github.com/staccx/bento/commit/4885598))



# [9.0.0-alpha.39](https://github.com/staccx/bento/compare/v9.0.0-alpha.38...v9.0.0-alpha.39) (2019-06-17)


### Features

* **component-testing:** component testing → WidowFix ([248129e](https://github.com/staccx/bento/commit/248129e))



# [9.0.0-alpha.38](https://github.com/staccx/bento/compare/v9.0.0-alpha.37...v9.0.0-alpha.38) (2019-06-14)


### Features

* **base:** add i18n ([9cc5529](https://github.com/staccx/bento/commit/9cc5529))
* **base:** add new base component WidowFix ([9e7e338](https://github.com/staccx/bento/commit/9e7e338))
* **base:** add variant to Keyfigures ([cf198e3](https://github.com/staccx/bento/commit/cf198e3))
* **developer-portal:** add support ([a89090b](https://github.com/staccx/bento/commit/a89090b))



# [9.0.0-alpha.37](https://github.com/staccx/bento/compare/v9.0.0-alpha.36...v9.0.0-alpha.37) (2019-06-13)


### Bug Fixes

* **cli:** add babel dep ([fa06a9b](https://github.com/staccx/bento/commit/fa06a9b))



# [9.0.0-alpha.36](https://github.com/staccx/bento/compare/v9.0.0-alpha.35...v9.0.0-alpha.36) (2019-06-13)


### Bug Fixes

* **cli:** add express dep ([2241bf3](https://github.com/staccx/bento/commit/2241bf3))
* **cli:** add express dep ([a08e2f9](https://github.com/staccx/bento/commit/a08e2f9))
* **cli:** move deps ([7adeb53](https://github.com/staccx/bento/commit/7adeb53))


### Features

* **cli:** add express dep ([eb41b2a](https://github.com/staccx/bento/commit/eb41b2a))



# [9.0.0-alpha.35](https://github.com/staccx/bento/compare/v9.0.0-alpha.34...v9.0.0-alpha.35) (2019-06-12)



# [9.0.0-alpha.34](https://github.com/staccx/bento/compare/v9.0.0-alpha.33...v9.0.0-alpha.34) (2019-06-12)


### Features

* **stacc-theme:** add variant for aside and menu wrapper ([ae3ea12](https://github.com/staccx/bento/commit/ae3ea12))



# [9.0.0-alpha.33](https://github.com/staccx/bento/compare/v9.0.0-alpha.32...v9.0.0-alpha.33) (2019-06-12)


### Bug Fixes

* **cli:** bentoroot ([7b265f9](https://github.com/staccx/bento/commit/7b265f9))


### Features

* **cli:** now force bento init ([5be9cad](https://github.com/staccx/bento/commit/5be9cad))



# [9.0.0-alpha.32](https://github.com/staccx/bento/compare/v9.0.0-alpha.31...v9.0.0-alpha.32) (2019-06-11)


### Bug Fixes

* **cli:** use jest, not react-scripts to testW ([ca40a78](https://github.com/staccx/bento/commit/ca40a78))



# [9.0.0-alpha.31](https://github.com/staccx/bento/compare/v9.0.0-alpha.30...v9.0.0-alpha.31) (2019-06-11)


### Bug Fixes

* **cli:** add dep ([4c6c355](https://github.com/staccx/bento/commit/4c6c355))



# [9.0.0-alpha.30](https://github.com/staccx/bento/compare/v9.0.0-alpha.29...v9.0.0-alpha.30) (2019-06-06)


### Bug Fixes

* **cli:** remove moar [@channel](https://github.com/channel) ([74e499b](https://github.com/staccx/bento/commit/74e499b))



# [9.0.0-alpha.29](https://github.com/staccx/bento/compare/v9.0.0-alpha.28...v9.0.0-alpha.29) (2019-06-06)


### Features

* **cli:** remove channel mention ([d14649e](https://github.com/staccx/bento/commit/d14649e))



# [9.0.0-alpha.28](https://github.com/staccx/bento/compare/v9.0.0-alpha.27...v9.0.0-alpha.28) (2019-06-06)


### Bug Fixes

* **cli:** fix issue with deps (I think) ([b039d47](https://github.com/staccx/bento/commit/b039d47))



# [9.0.0-alpha.27](https://github.com/staccx/bento/compare/v9.0.0-alpha.26...v9.0.0-alpha.27) (2019-06-06)


### Bug Fixes

* **cli:** add pre dist tag ([24e0837](https://github.com/staccx/bento/commit/24e0837))
* **cli:** bumping to fix revert ([a4f3ff4](https://github.com/staccx/bento/commit/a4f3ff4))


### Features

* **cli:** add support for dist tag ([7d0fa0b](https://github.com/staccx/bento/commit/7d0fa0b))
* **cli:** fixing commands to allow for global install ([b2f7004](https://github.com/staccx/bento/commit/b2f7004))
* **cli:** support all bumps ([0bca6cc](https://github.com/staccx/bento/commit/0bca6cc))



# [9.0.0-alpha.26](https://github.com/staccx/bento/compare/v8.88.0...v9.0.0-alpha.26) (2019-06-06)


### Features

* **cli:** made ready for publish to global ([84c000f](https://github.com/staccx/bento/commit/84c000f))



# [8.88.0](https://github.com/staccx/bento/compare/v9.0.0-alpha.25...v8.88.0) (2019-06-05)


### Bug Fixes

* **cli:** add moar deps ([ea13ffb](https://github.com/staccx/bento/commit/ea13ffb))


### Features

* **base:** add Breadcrumb2 component ([f2a5ed2](https://github.com/staccx/bento/commit/f2a5ed2))
* **stacc-theme:** add hero color ([57f1bba](https://github.com/staccx/bento/commit/57f1bba))



# [9.0.0-alpha.25](https://github.com/staccx/bento/compare/v8.87.2...v9.0.0-alpha.25) (2019-06-04)



## [8.87.2](https://github.com/staccx/bento/compare/v9.0.0-alpha.24...v8.87.2) (2019-06-03)


### Bug Fixes

* **bento:** upgrade to axios ^0.19.0 ([b83df06](https://github.com/staccx/bento/commit/b83df06))


### Features

* **cli:** storybook api, not spawn. makes storybook attach correctly ([4eae5ad](https://github.com/staccx/bento/commit/4eae5ad))
* **storybook:** add syntaxhighlighter. tweak config ([a65704b](https://github.com/staccx/bento/commit/a65704b))



# [9.0.0-alpha.24](https://github.com/staccx/bento/compare/v9.0.0-alpha.23...v9.0.0-alpha.24) (2019-05-31)


### Bug Fixes

* **cli:** fix publish not setting registry ([2339760](https://github.com/staccx/bento/commit/2339760))


### Features

* **themes:** add storybook names to all themes ([6631be6](https://github.com/staccx/bento/commit/6631be6))



# [9.0.0-alpha.23](https://github.com/staccx/bento/compare/v9.0.0-alpha.22...v9.0.0-alpha.23) (2019-05-31)


### Bug Fixes

* **cli:** fix es5 import ([4ad9697](https://github.com/staccx/bento/commit/4ad9697))


### Features

* **cli:** release will now also deploy storybook ([9695eef](https://github.com/staccx/bento/commit/9695eef))
* **storybook:** add doc stories. add requirements ([72c8ad8](https://github.com/staccx/bento/commit/72c8ad8))



# [9.0.0-alpha.22](https://github.com/staccx/bento/compare/v9.0.0-alpha.21...v9.0.0-alpha.22) (2019-05-29)


### Bug Fixes

* **base:** fix import path ([bf77efa](https://github.com/staccx/bento/commit/bf77efa))



# [9.0.0-alpha.21](https://github.com/staccx/bento/compare/v9.0.0-alpha.20...v9.0.0-alpha.21) (2019-05-29)



# [9.0.0-alpha.20](https://github.com/staccx/bento/compare/v9.0.0-alpha.19...v9.0.0-alpha.20) (2019-05-29)


### Features

* **base:** dataFetcherFactory ([c17ec84](https://github.com/staccx/bento/commit/c17ec84))



# [9.0.0-alpha.19](https://github.com/staccx/bento/compare/v9.0.0-alpha.18...v9.0.0-alpha.19) (2019-05-27)



# [9.0.0-alpha.18](https://github.com/staccx/bento/compare/v9.0.0-alpha.17...v9.0.0-alpha.18) (2019-05-24)


### Bug Fixes

* **sanity:** early out ([ea3ff19](https://github.com/staccx/bento/commit/ea3ff19))


### Features

* **base:** useDebounce now encapsulates state ([34e8088](https://github.com/staccx/bento/commit/34e8088))



# [9.0.0-alpha.17](https://github.com/staccx/bento/compare/v9.0.0-alpha.16...v9.0.0-alpha.17) (2019-05-20)


### Bug Fixes

* **bento:** exporting hooks ([8beb5c1](https://github.com/staccx/bento/commit/8beb5c1))



# [9.0.0-alpha.16](https://github.com/staccx/bento/compare/v9.0.0-alpha.15...v9.0.0-alpha.16) (2019-05-20)


### Features

* **base:** add hook debounce ([141f472](https://github.com/staccx/bento/commit/141f472))
* **base:** add new hook useInterval ([747b41a](https://github.com/staccx/bento/commit/747b41a))
* **storybook:** added stories for ExpandListItem ([15030d4](https://github.com/staccx/bento/commit/15030d4))
* **storybook:** added stories for InlineList ([239efd1](https://github.com/staccx/bento/commit/239efd1))
* **storybook:** added stories for LinkList & SplitList ([81f2a16](https://github.com/staccx/bento/commit/81f2a16))
* **storybook:** added stories for Logo and fix logo.js ([bca40ad](https://github.com/staccx/bento/commit/bca40ad))
* **storybook:** added stories for Modal ([bfb6919](https://github.com/staccx/bento/commit/bfb6919))
* **storybook:** added stories for NewBadge ([ff169dc](https://github.com/staccx/bento/commit/ff169dc))
* **storybook:** added stories for Portal ([eaed802](https://github.com/staccx/bento/commit/eaed802))



# [9.0.0-alpha.15](https://github.com/staccx/bento/compare/v9.0.0-alpha.14...v9.0.0-alpha.15) (2019-05-15)


### Bug Fixes

* **open-id:** add loading to useUser ([04e36c0](https://github.com/staccx/bento/commit/04e36c0))



# [9.0.0-alpha.14](https://github.com/staccx/bento/compare/v8.87.1...v9.0.0-alpha.14) (2019-05-14)


### Features

* **cli:** add bumpiness argument ([e94a021](https://github.com/staccx/bento/commit/e94a021))
* **open-id:** rewrite with hooks ([4c5830b](https://github.com/staccx/bento/commit/4c5830b))



## [8.87.1](https://github.com/staccx/bento/compare/v9.0.0-alpha.13...v8.87.1) (2019-05-13)


### Bug Fixes

* **base:** update postal code api server address ([aafb960](https://github.com/staccx/bento/commit/aafb960))



# [9.0.0-alpha.13](https://github.com/staccx/bento/compare/v8.87.0...v9.0.0-alpha.13) (2019-05-09)


### Bug Fixes

* **base:** fix i18n components ([dacf40b](https://github.com/staccx/bento/commit/dacf40b))
* **cli:** fix i18n config ([0b7abf5](https://github.com/staccx/bento/commit/0b7abf5))
* **sanity:** fix Sanitylist dependency array ([3e47451](https://github.com/staccx/bento/commit/3e47451))


### Features

* **cli:** new config file solution ([3e76974](https://github.com/staccx/bento/commit/3e76974))
* **eslint:** add ignore to dumb(?) rule ([2eb3f34](https://github.com/staccx/bento/commit/2eb3f34))



# [8.87.0](https://github.com/staccx/bento/compare/v9.0.0-alpha.12...v8.87.0) (2019-05-09)


### Bug Fixes

* **imove-theme:** fix imove logo ([a78e5c0](https://github.com/staccx/bento/commit/a78e5c0))


### Features

* **storybook:** added stories for Divider & flag ([d6ff853](https://github.com/staccx/bento/commit/d6ff853))
* **storybook:** added stories for Pack & Wrapper ([ec54fbc](https://github.com/staccx/bento/commit/ec54fbc))
* **storybook:** stories for ItemGroup & Layout ([ba303f5](https://github.com/staccx/bento/commit/ba303f5))



# [9.0.0-alpha.12](https://github.com/staccx/bento/compare/v9.0.0-alpha.11...v9.0.0-alpha.12) (2019-05-08)


### Features

* **sanity:** exporet list, query, doc ([bc3f859](https://github.com/staccx/bento/commit/bc3f859))
* **storybook:** added stories for Box ([57d2fb2](https://github.com/staccx/bento/commit/57d2fb2))
* **storybook:** edit DataViz & Forms & Icons ([caf38c2](https://github.com/staccx/bento/commit/caf38c2))



# [9.0.0-alpha.11](https://github.com/staccx/bento/compare/v9.0.0-alpha.10...v9.0.0-alpha.11) (2019-05-08)


### Bug Fixes

* **bento:** lockfile ([9d89b3e](https://github.com/staccx/bento/commit/9d89b3e))


### Features

* **storybook:** edit stories Button & Donut & fraction ([28e39e9](https://github.com/staccx/bento/commit/28e39e9))
* **storybook:** edit stories for Keyfigures & ProgressBar ([390ccb8](https://github.com/staccx/bento/commit/390ccb8))
* **storybook:** edit stories for Odometer & CheckBox ([dd641c1](https://github.com/staccx/bento/commit/dd641c1))



# [9.0.0-alpha.10](https://github.com/staccx/bento/compare/v9.0.0-alpha.9...v9.0.0-alpha.10) (2019-05-08)


### Bug Fixes

* **sanity:** fix export ([3d22be3](https://github.com/staccx/bento/commit/3d22be3))


### Features

* **sanity:** add params to query function ([355de0f](https://github.com/staccx/bento/commit/355de0f))



# [9.0.0-alpha.9](https://github.com/staccx/bento/compare/v9.0.0-alpha.8...v9.0.0-alpha.9) (2019-05-08)


### Bug Fixes

* **base:** fix skeletoncircle ([47c9d52](https://github.com/staccx/bento/commit/47c9d52))
* **styrke:** add name to theme ([320af36](https://github.com/staccx/bento/commit/320af36))



# [9.0.0-alpha.8](https://github.com/staccx/bento/compare/v9.0.0-alpha.7...v9.0.0-alpha.8) (2019-05-06)


### Bug Fixes

* **base:** fix build script for build:packages ([fed6541](https://github.com/staccx/bento/commit/fed6541))



# [9.0.0-alpha.7](https://github.com/staccx/bento/compare/v9.0.0-alpha.6...v9.0.0-alpha.7) (2019-05-06)


### Bug Fixes

* **base:** fix expand after refactor ([5fcad3c](https://github.com/staccx/bento/commit/5fcad3c))
* **bento:** replace resolved urls in yarn.lock ([523b443](https://github.com/staccx/bento/commit/523b443))
* **storybook:** fix input stories ([c95851e](https://github.com/staccx/bento/commit/c95851e))


### Features

* **base:** add i18n to base ([f18d492](https://github.com/staccx/bento/commit/f18d492))
* **bento:** add lint-staged to root ([90fa350](https://github.com/staccx/bento/commit/90fa350))
* **bento:** fix lint-staged. add config file instead of package config ([5fd130d](https://github.com/staccx/bento/commit/5fd130d))
* **storybook:** added knobs, stories for Donut + copytoclip ([8344244](https://github.com/staccx/bento/commit/8344244))
* **storybook:** added stories for CheckGroup ([a7dc8ee](https://github.com/staccx/bento/commit/a7dc8ee))
* **storybook:** added stories for Keyfigures ([1b3a0c3](https://github.com/staccx/bento/commit/1b3a0c3))
* **storybook:** added stories for Loading & ProgressBar ([2466d29](https://github.com/staccx/bento/commit/2466d29))
* **storybook:** added stories for Odometer ([4360500](https://github.com/staccx/bento/commit/4360500))
* **storybook:** stories for AccountInput & Label ([1807e90](https://github.com/staccx/bento/commit/1807e90))
* **storybook:** stories for Icons & Image ([10b3232](https://github.com/staccx/bento/commit/10b3232))
* **storybook:** stories for RadioPill ([656c7ee](https://github.com/staccx/bento/commit/656c7ee))
* **storybook:** white bg, stories for Fraction ([98a0688](https://github.com/staccx/bento/commit/98a0688))



# [9.0.0-alpha.6](https://github.com/staccx/bento/compare/v9.0.0-alpha.5...v9.0.0-alpha.6) (2019-05-03)


### Features

* **base:** add skeleton components ([20a4c73](https://github.com/staccx/bento/commit/20a4c73))
* **base:** add SkeletonCircle ([4c86568](https://github.com/staccx/bento/commit/4c86568))
* **nordea-theme:** add flush: "0" ([84aef90](https://github.com/staccx/bento/commit/84aef90))
* **storybook:** added stories for CopyToClipboard ([4a2a47d](https://github.com/staccx/bento/commit/4a2a47d))
* **storybook:** added stories for Legend ([9ca8572](https://github.com/staccx/bento/commit/9ca8572))
* **storybook:** story for anchor, expand, text, radioBtn,checkbox ([0f1ed02](https://github.com/staccx/bento/commit/0f1ed02))



# [9.0.0-alpha.5](https://github.com/staccx/bento/compare/v9.0.0-alpha.4...v9.0.0-alpha.5) (2019-05-02)


### Features

* **base:** export Translate ([4004d13](https://github.com/staccx/bento/commit/4004d13))



# [9.0.0-alpha.4](https://github.com/staccx/bento/compare/v9.0.0-alpha.3...v9.0.0-alpha.4) (2019-04-29)



# [9.0.0-alpha.3](https://github.com/staccx/bento/compare/v9.0.0-alpha.2...v9.0.0-alpha.3) (2019-04-29)


### Bug Fixes

* **base:** fix Box size prop not working ([34e7095](https://github.com/staccx/bento/commit/34e7095))


### Features

* **base:** add i18n components ([349a726](https://github.com/staccx/bento/commit/349a726))
* **base:** delete jsonschema 🍾 ([099dffe](https://github.com/staccx/bento/commit/099dffe))
* **i18n:** change into functional ([7b22418](https://github.com/staccx/bento/commit/7b22418))
* **nordea-theme:** remove BaseTheme ([8d68f4e](https://github.com/staccx/bento/commit/8d68f4e))
* **storybook:** add story for Alert ([736e8c4](https://github.com/staccx/bento/commit/736e8c4))


### BREAKING CHANGES

* **i18n:** removed i18n instance class



# [9.0.0-alpha.2](https://github.com/staccx/bento/compare/v9.0.0-alpha.1...v9.0.0-alpha.2) (2019-04-23)


### Features

* **bento:** dependencies ([0030472](https://github.com/staccx/bento/commit/0030472))



# [9.0.0-alpha.1](https://github.com/staccx/bento/compare/v8.86.0...v9.0.0-alpha.1) (2019-04-23)


### Features

* **cli:** change to der ewige token ([856d670](https://github.com/staccx/bento/commit/856d670))
* **cli:** install peerDeps from eslint-config ([3432fad](https://github.com/staccx/bento/commit/3432fad))
* **eslint-config:** upgrade deps to work with CRA 3.0 ([14a748f](https://github.com/staccx/bento/commit/14a748f))
* **storybook:** add proper theme switcher ([da73b3c](https://github.com/staccx/bento/commit/da73b3c))
* **storybook:** added info ([d8954b0](https://github.com/staccx/bento/commit/d8954b0))



# [8.86.0](https://github.com/staccx/bento/compare/v8.85.0...v8.86.0) (2019-04-15)


### Bug Fixes

* **nordea-theme:** fix responsive layout of financingTable ([82fbe3e](https://github.com/staccx/bento/commit/82fbe3e))


### Features

* **bank-in-a-box:** show messages in end account ([9250603](https://github.com/staccx/bento/commit/9250603))
* **eslint-config:** make eslint-config compatible with latest CRA ([190fe70](https://github.com/staccx/bento/commit/190fe70))



# [8.85.0](https://github.com/staccx/bento/compare/v8.84.0...v8.85.0) (2019-04-15)


### Bug Fixes

* **cli:** pipe storybook processes ([67c2ff8](https://github.com/staccx/bento/commit/67c2ff8))
* **storybook:** small changes to template ([981615c](https://github.com/staccx/bento/commit/981615c))


### Features

* **bank-in-a-box:** show messages in withdraw ([60e638a](https://github.com/staccx/bento/commit/60e638a))
* **base:** add button story ([427c428](https://github.com/staccx/bento/commit/427c428))
* **base:** add category to path ([b6381cf](https://github.com/staccx/bento/commit/b6381cf))
* **base:** input now functional and use hooks ([247f73d](https://github.com/staccx/bento/commit/247f73d))
* **base:** more stories of input. fix defaultValue if no cleave ([cda3452](https://github.com/staccx/bento/commit/cda3452))
* **base:** stories of Breadcrumb and Coderenderer ([b53b975](https://github.com/staccx/bento/commit/b53b975))
* **bento:** new deps ([a0e4253](https://github.com/staccx/bento/commit/a0e4253))
* **cli:** changes to slack message + piping of process stdout ([63745a5](https://github.com/staccx/bento/commit/63745a5))
* **cli:** new command storybook with actions start and deploy ([47411ab](https://github.com/staccx/bento/commit/47411ab))
* **cli:** new storybook action: open ([e699eec](https://github.com/staccx/bento/commit/e699eec))
* **formatting:** add story to currency ([a678a33](https://github.com/staccx/bento/commit/a678a33))
* **formatting:** added stories for currency and maskFormat (renamed) ([8e47e50](https://github.com/staccx/bento/commit/8e47e50))
* **formatting:** deprecating formatPhone for maskFormat ([aa1cbfb](https://github.com/staccx/bento/commit/aa1cbfb))
* **storybook:** add storybook ([c466ba9](https://github.com/staccx/bento/commit/c466ba9))
* **storybook:** added template for writing stories ([57232c0](https://github.com/staccx/bento/commit/57232c0))
* **storybook:** moar addons ([2cb97e7](https://github.com/staccx/bento/commit/2cb97e7))
* **styleguide:** remove styleguide ([22f1fa4](https://github.com/staccx/bento/commit/22f1fa4))
* **utils:** stories for partition ([df72824](https://github.com/staccx/bento/commit/df72824))



# [8.84.0](https://github.com/staccx/bento/compare/v9.0.0-alpha.0...v8.84.0) (2019-04-11)


### Bug Fixes

* **aprila-theme:** set min-width for country code ([3fbd2e4](https://github.com/staccx/bento/commit/3fbd2e4))


### Features

* **nordea-theme:** add verylightgray ([9041a02](https://github.com/staccx/bento/commit/9041a02))



# [9.0.0-alpha.0](https://github.com/staccx/bento/compare/v8.83.2...v9.0.0-alpha.0) (2019-04-10)


### Features

* **bento:** updated react dep ([b7d6cea](https://github.com/staccx/bento/commit/b7d6cea))


### BREAKING CHANGES

* **bento:** not backwards compatible



## [8.83.2](https://github.com/staccx/bento/compare/v8.83.1...v8.83.2) (2019-04-08)


### Bug Fixes

* **formatting:** hold the phone ([416d3f3](https://github.com/staccx/bento/commit/416d3f3))



## [8.83.1](https://github.com/staccx/bento/compare/v8.83.0...v8.83.1) (2019-04-08)


### Bug Fixes

* **formatting:** locking version for date-fns ([85cc693](https://github.com/staccx/bento/commit/85cc693))



# [8.83.0](https://github.com/staccx/bento/compare/v8.82.0...v8.83.0) (2019-04-05)


### Features

* **aprila-theme:** use translated text for heading ([374356c](https://github.com/staccx/bento/commit/374356c))



# [8.82.0](https://github.com/staccx/bento/compare/v8.81.1...v8.82.0) (2019-04-03)


### Features

* **bank-in-a-box:** enable validation of account number ([f630b9c](https://github.com/staccx/bento/commit/f630b9c))



## [8.81.1](https://github.com/staccx/bento/compare/v8.81.0...v8.81.1) (2019-04-02)


### Bug Fixes

* **biab:** fix user feedback on save ([d2d16c2](https://github.com/staccx/bento/commit/d2d16c2))



# [8.81.0](https://github.com/staccx/bento/compare/v8.80.1...v8.81.0) (2019-03-28)


### Features

* **bank-in-a-box:** add initialAmount prop to Withdraw ([e390c38](https://github.com/staccx/bento/commit/e390c38))



## [8.80.1](https://github.com/staccx/bento/compare/v8.80.0...v8.80.1) (2019-03-27)



# [8.80.0](https://github.com/staccx/bento/compare/v8.79.0...v8.80.0) (2019-03-27)


### Features

* **stacc-theme:** add boxShadow ([8199807](https://github.com/staccx/bento/commit/8199807))



# [8.79.0](https://github.com/staccx/bento/compare/v8.78.4...v8.79.0) (2019-03-27)


### Bug Fixes

* **base:** remove usage of react-router ([8ae8bd4](https://github.com/staccx/bento/commit/8ae8bd4))
* **i18n:** now works on native ([355b6c5](https://github.com/staccx/bento/commit/355b6c5))
* **stacc-web:** fix typo in proptypes ([827821c](https://github.com/staccx/bento/commit/827821c))


### Features

* **sanity-plugin-i18n:** add support decorations for localeRichText ([d688022](https://github.com/staccx/bento/commit/d688022))



## [8.78.4](https://github.com/staccx/bento/compare/v8.78.3...v8.78.4) (2019-03-27)


### Bug Fixes

* **postalcodeinput:** prevent casting to number ([7dcb789](https://github.com/staccx/bento/commit/7dcb789))



## [8.78.3](https://github.com/staccx/bento/compare/v8.78.2...v8.78.3) (2019-03-26)


### Bug Fixes

* **postalcodeinput:** fix type and pattern ([a646f7a](https://github.com/staccx/bento/commit/a646f7a))



## [8.78.2](https://github.com/staccx/bento/compare/v8.78.1...v8.78.2) (2019-03-26)


### Bug Fixes

* **postcodeinput:** fix header issue ([b62d499](https://github.com/staccx/bento/commit/b62d499))



## [8.78.1](https://github.com/staccx/bento/compare/v8.78.0...v8.78.1) (2019-03-26)


### Bug Fixes

* **postalcodeinput:** dont delete Auth headers ([f347ce3](https://github.com/staccx/bento/commit/f347ce3))



# [8.78.0](https://github.com/staccx/bento/compare/v8.77.1...v8.78.0) (2019-03-25)


### Features

* **form:** add touched ([e0463e1](https://github.com/staccx/bento/commit/e0463e1))



## [8.77.1](https://github.com/staccx/bento/compare/v8.77.0...v8.77.1) (2019-03-25)


### Bug Fixes

* **base:** pass variant to input, remove id ([53ad534](https://github.com/staccx/bento/commit/53ad534))



# [8.77.0](https://github.com/staccx/bento/compare/v8.76.1...v8.77.0) (2019-03-20)


### Features

* **i18n:** remove reference to base ot enable in native ([7ed55bd](https://github.com/staccx/bento/commit/7ed55bd))



## [8.76.1](https://github.com/staccx/bento/compare/v8.76.0...v8.76.1) (2019-03-20)


### Bug Fixes

* **base:** fix axios using defaults set by app causing calls to fail ([c9ca367](https://github.com/staccx/bento/commit/c9ca367))
* **postalcodeinput:** setplace null ([551fc58](https://github.com/staccx/bento/commit/551fc58))



# [8.76.0](https://github.com/staccx/bento/compare/v8.75.1...v8.76.0) (2019-03-20)


### Features

* **cli:** add skip option ([5db4bc4](https://github.com/staccx/bento/commit/5db4bc4))



## [8.75.1](https://github.com/staccx/bento/compare/v8.75.0...v8.75.1) (2019-03-20)


### Bug Fixes

* **postalcodeinput:** return something ([32d7a0c](https://github.com/staccx/bento/commit/32d7a0c))



# [8.75.0](https://github.com/staccx/bento/compare/v8.74.0...v8.75.0) (2019-03-20)


### Features

* **postalcodeinput:** improve UX, refactor to hooks ([e85ecb5](https://github.com/staccx/bento/commit/e85ecb5))



# [8.74.0](https://github.com/staccx/bento/compare/v8.73.7...v8.74.0) (2019-03-18)


### Features

* **base:** initial country code in PhoneInput ([99e7500](https://github.com/staccx/bento/commit/99e7500))



## [8.73.7](https://github.com/staccx/bento/compare/v8.73.6...v8.73.7) (2019-03-15)



## [8.73.6](https://github.com/staccx/bento/compare/v8.73.5...v8.73.6) (2019-03-15)


### Bug Fixes

* **aprila-theme:** fix image width ([4e0a747](https://github.com/staccx/bento/commit/4e0a747))



## [8.73.5](https://github.com/staccx/bento/compare/v8.73.4...v8.73.5) (2019-03-14)


### Bug Fixes

* **aprila-theme:** hack fix width Toggle ([22c60a9](https://github.com/staccx/bento/commit/22c60a9))



## [8.73.4](https://github.com/staccx/bento/compare/v8.73.3...v8.73.4) (2019-03-14)



## [8.73.3](https://github.com/staccx/bento/compare/v8.73.2...v8.73.3) (2019-03-14)


### Bug Fixes

* **base:** phoneInput now passes props on to label and wrap ([423ee8b](https://github.com/staccx/bento/commit/423ee8b))



## [8.73.2](https://github.com/staccx/bento/compare/v8.73.1...v8.73.2) (2019-03-13)


### Bug Fixes

* **base:** remove huge log ([322a0a6](https://github.com/staccx/bento/commit/322a0a6))
* **json-schema:** fix where arrays get label from ([8b475f0](https://github.com/staccx/bento/commit/8b475f0))



## [8.73.1](https://github.com/staccx/bento/compare/v8.73.0...v8.73.1) (2019-03-13)


### Bug Fixes

* **base:** fix problem with variants in phoneinput ([1f0c3bf](https://github.com/staccx/bento/commit/1f0c3bf))



# [8.73.0](https://github.com/staccx/bento/compare/v8.72.4...v8.73.0) (2019-03-12)


### Bug Fixes

* **aprila-theme:** max with for selected ([29ff77d](https://github.com/staccx/bento/commit/29ff77d))


### Features

* **component-testing:** add breadcrumb to page ([8ce1e63](https://github.com/staccx/bento/commit/8ce1e63))



## [8.72.4](https://github.com/staccx/bento/compare/v8.72.3...v8.72.4) (2019-03-08)


### Bug Fixes

* **aprila-theme:** remove margin top from submit button ([f1cfd91](https://github.com/staccx/bento/commit/f1cfd91))



## [8.72.3](https://github.com/staccx/bento/compare/v8.72.2...v8.72.3) (2019-03-08)


### Bug Fixes

* **aprila-theme:** fix spacing + phoneInput ([3b24ef4](https://github.com/staccx/bento/commit/3b24ef4))
* **base:** propagate variant ([ab9e913](https://github.com/staccx/bento/commit/ab9e913))
* **json-schema:** propagate variant to layout ([88b1300](https://github.com/staccx/bento/commit/88b1300))



## [8.72.2](https://github.com/staccx/bento/compare/v8.72.1...v8.72.2) (2019-03-08)


### Bug Fixes

* **cli:** add input to giphy ([fba27d4](https://github.com/staccx/bento/commit/fba27d4))



## [8.72.1](https://github.com/staccx/bento/compare/v8.72.0...v8.72.1) (2019-03-08)


### Bug Fixes

* **cli:** use downsampled version of gif to avoid it now showing ([af77bf6](https://github.com/staccx/bento/commit/af77bf6))



# [8.72.0](https://github.com/staccx/bento/compare/v8.71.3...v8.72.0) (2019-03-08)


### Bug Fixes

* **aprila-theme:** fix help button theming ([ebaeefe](https://github.com/staccx/bento/commit/ebaeefe))
* **base:** fix pointer events on selectsimple caret ([aa22f57](https://github.com/staccx/bento/commit/aa22f57))


### Features

* **base:** theming is now exported as part ([12f9e4c](https://github.com/staccx/bento/commit/12f9e4c))



## [8.71.3](https://github.com/staccx/bento/compare/v8.71.2...v8.71.3) (2019-03-07)


### Bug Fixes

* **styleguide:** fix error in script ([61c4e0e](https://github.com/staccx/bento/commit/61c4e0e))



## [8.71.2](https://github.com/staccx/bento/compare/v8.71.1...v8.71.2) (2019-03-06)



## [8.71.1](https://github.com/staccx/bento/compare/v8.71.0...v8.71.1) (2019-03-06)



# [8.71.0](https://github.com/staccx/bento/compare/v8.70.1...v8.71.0) (2019-03-05)


### Features

* **imove-theme:** add divider, fix buttons nd layout ([45d0576](https://github.com/staccx/bento/commit/45d0576))



## [8.70.1](https://github.com/staccx/bento/compare/v8.70.0...v8.70.1) (2019-03-05)


### Bug Fixes

* **base:** fix missing theme prop ([dacff35](https://github.com/staccx/bento/commit/dacff35))
* **biab:** fix i18n and onclick for documents ([399c1d3](https://github.com/staccx/bento/commit/399c1d3))



# [8.70.0](https://github.com/staccx/bento/compare/v8.69.1...v8.70.0) (2019-03-01)


### Features

* **base:** new component development ([2c25521](https://github.com/staccx/bento/commit/2c25521))
* **imove-theme:** add SelectSimple to theme ([8a234d2](https://github.com/staccx/bento/commit/8a234d2))



## [8.69.1](https://github.com/staccx/bento/compare/v8.69.0...v8.69.1) (2019-03-01)


### Bug Fixes

* **aprila-theme:** fix accountheading ([80028e0](https://github.com/staccx/bento/commit/80028e0))
* **base:** form traversechildren ([c3b42fd](https://github.com/staccx/bento/commit/c3b42fd))
* **biab:** fix withdraw ([c4324cf](https://github.com/staccx/bento/commit/c4324cf))



# [8.69.0](https://github.com/staccx/bento/compare/v8.68.1...v8.69.0) (2019-03-01)


### Bug Fixes

* **biab:** fix endaccount ([5a4a8e8](https://github.com/staccx/bento/commit/5a4a8e8))


### Features

* **imove-theme:** add inbfobutton ([812f9b1](https://github.com/staccx/bento/commit/812f9b1))
* **open-id:** add signinSilentCallback to export ([a11011f](https://github.com/staccx/bento/commit/a11011f))



## [8.68.1](https://github.com/staccx/bento/compare/v8.68.0...v8.68.1) (2019-02-28)



# [8.68.0](https://github.com/staccx/bento/compare/v8.67.0...v8.68.0) (2019-02-28)


### Bug Fixes

* **biab:** fix email&sms + default values ([7eab626](https://github.com/staccx/bento/commit/7eab626))


### Features

* **base:** add themeprop to CheckBox for easier future styling ([9fcb6b5](https://github.com/staccx/bento/commit/9fcb6b5))
* **imove-theme:** adjust styles ([a332d34](https://github.com/staccx/bento/commit/a332d34))



# [8.67.0](https://github.com/staccx/bento/compare/v8.66.0...v8.67.0) (2019-02-27)


### Bug Fixes

* **imove-theme:** fixes playing nice with base 8 ([499822a](https://github.com/staccx/bento/commit/499822a))


### Features

* **cli:** add s3 upload ([c5cd3a4](https://github.com/staccx/bento/commit/c5cd3a4))
* **imove-theme:** add new variant ([f52b790](https://github.com/staccx/bento/commit/f52b790))
* **quantfolio-components:** add data to table! ([dab7a27](https://github.com/staccx/bento/commit/dab7a27))
* **quantfolio-components:** add filters ([17593bd](https://github.com/staccx/bento/commit/17593bd))
* **quantfolio-components:** add table sorting ([c530b6f](https://github.com/staccx/bento/commit/c530b6f))
* **quantfolio-components:** blocks ([207425f](https://github.com/staccx/bento/commit/207425f))
* **quantfolio-components:** ready for export ([db413d8](https://github.com/staccx/bento/commit/db413d8))
* **quantfolio-widgets:** add expanding to table ([122abbe](https://github.com/staccx/bento/commit/122abbe))
* **quantfolio-widgets:** add sortbutton, filter ([79375cd](https://github.com/staccx/bento/commit/79375cd))
* **quantfolio-widgets:** add table ([cc27d10](https://github.com/staccx/bento/commit/cc27d10))
* **quantfolio-widgets:** improve tables ([edd037a](https://github.com/staccx/bento/commit/edd037a))



# [8.66.0](https://github.com/staccx/bento/compare/v8.65.0...v8.66.0) (2019-02-22)


### Bug Fixes

* **quantfolio:** opt out of init ([61ae05c](https://github.com/staccx/bento/commit/61ae05c))


### Features

* **quantfolio-widgets:** add dep ([4e6023a](https://github.com/staccx/bento/commit/4e6023a))



# [8.65.0](https://github.com/staccx/bento/compare/v8.64.2...v8.65.0) (2019-02-22)


### Features

* **quantfolio:** add new module quantfolio ([ab6f966](https://github.com/staccx/bento/commit/ab6f966))



## [8.64.2](https://github.com/staccx/bento/compare/v8.64.1...v8.64.2) (2019-02-20)


### Bug Fixes

* **aprila-theme:** select and move ([55213ab](https://github.com/staccx/bento/commit/55213ab))
* **bank-in-a-box:** add variant in profile ([222b714](https://github.com/staccx/bento/commit/222b714))



## [8.64.1](https://github.com/staccx/bento/compare/v8.64.0...v8.64.1) (2019-02-20)


### Bug Fixes

* **base:** fix logging of countries ([9a10458](https://github.com/staccx/bento/commit/9a10458))



# [8.64.0](https://github.com/staccx/bento/compare/v8.63.1...v8.64.0) (2019-02-20)


### Features

* **cli:** add giphy ([4936a44](https://github.com/staccx/bento/commit/4936a44))



## [8.63.1](https://github.com/staccx/bento/compare/v8.63.0...v8.63.1) (2019-02-20)


### Bug Fixes

* **cli:** giphy. for fun ([0ce0575](https://github.com/staccx/bento/commit/0ce0575))



# [8.63.0](https://github.com/staccx/bento/compare/v8.62.3...v8.63.0) (2019-02-20)


### Features

* **base:** add country select to phoneinput ([bf0ed43](https://github.com/staccx/bento/commit/bf0ed43))
* **cli:** add options to include all data ([5cf8376](https://github.com/staccx/bento/commit/5cf8376))



## [8.62.3](https://github.com/staccx/bento/compare/v8.62.2...v8.62.3) (2019-02-19)


### Bug Fixes

* **aprila-theme:** reduce margin top ([8a69599](https://github.com/staccx/bento/commit/8a69599))
* **aprila-theme:** reduce margin top ([c7e2075](https://github.com/staccx/bento/commit/c7e2075))
* **bank-in-a-box:** fix heading for statements ([04747d1](https://github.com/staccx/bento/commit/04747d1))



## [8.62.2](https://github.com/staccx/bento/compare/v8.62.1...v8.62.2) (2019-02-19)


### Bug Fixes

* **aprila-theme:** fix loading src ([fef5ad2](https://github.com/staccx/bento/commit/fef5ad2))



## [8.62.1](https://github.com/staccx/bento/compare/v8.62.0...v8.62.1) (2019-02-19)



# [8.62.0](https://github.com/staccx/bento/compare/v8.61.0...v8.62.0) (2019-02-19)


### Bug Fixes

* **quantfolio-widgets:** fix scripts ([d64315e](https://github.com/staccx/bento/commit/d64315e))


### Features

* **aprila-theme:** add loading theming ([34861dd](https://github.com/staccx/bento/commit/34861dd))
* **base:** add hook, useTimer ([bc8d6c7](https://github.com/staccx/bento/commit/bc8d6c7))
* **base:** add support for country code and additionalCSS ([2cf502b](https://github.com/staccx/bento/commit/2cf502b))
* **base:** loading now waits (default 1s) before rendering ([12dde7c](https://github.com/staccx/bento/commit/12dde7c))
* **eslint-config:** add jest to globalsd ([cd88c3a](https://github.com/staccx/bento/commit/cd88c3a))
* **quantfolio-widgets:** add quantfolio widgets ([7ba7287](https://github.com/staccx/bento/commit/7ba7287))
* **quantfolio-widgets:** added widgets. readying for export ([c9df2d6](https://github.com/staccx/bento/commit/c9df2d6))



# [8.61.0](https://github.com/staccx/bento/compare/v8.60.4...v8.61.0) (2019-02-12)


### Features

* **nori:** meet nori, your new app boilerplater ([545a249](https://github.com/staccx/bento/commit/545a249))



## [8.60.4](https://github.com/staccx/bento/compare/v8.60.3...v8.60.4) (2019-02-11)


### Bug Fixes

* **bank-in-a-box:** fix translations where none nec ([cab735f](https://github.com/staccx/bento/commit/cab735f))



## [8.60.3](https://github.com/staccx/bento/compare/v8.60.2...v8.60.3) (2019-02-11)


### Bug Fixes

* **aprila-theme:** fix styling for combo ([7d7e286](https://github.com/staccx/bento/commit/7d7e286))
* **base:** fix variant for combo wrapper ([776f957](https://github.com/staccx/bento/commit/776f957))
* **cli:** skip prettier since its f ing broken ([712e416](https://github.com/staccx/bento/commit/712e416))
* **json-schema:** fix render prop validate ([c87e37b](https://github.com/staccx/bento/commit/c87e37b))



## [8.60.2](https://github.com/staccx/bento/compare/v8.60.1...v8.60.2) (2019-02-11)


### Bug Fixes

* **aprila-theme:** theming for onboarding ([1f68f50](https://github.com/staccx/bento/commit/1f68f50))
* **base:** breadcrumb: hover and current should be separate conserns ([a6711b3](https://github.com/staccx/bento/commit/a6711b3))
* **base:** fix overflow problem on small line height + optimize code ([a2b6ffd](https://github.com/staccx/bento/commit/a2b6ffd))
* **cli:** fix for prettier bug ([0e02786](https://github.com/staccx/bento/commit/0e02786))
* **json-schema:** fix validation and variants through options ([67a986a](https://github.com/staccx/bento/commit/67a986a))



## [8.60.1](https://github.com/staccx/bento/compare/v8.60.0...v8.60.1) (2019-02-11)


### Bug Fixes

* **aprila-theme:** fix err in spacing. remove console ([fdd1329](https://github.com/staccx/bento/commit/fdd1329))



# [8.60.0](https://github.com/staccx/bento/compare/v8.59.0...v8.60.0) (2019-02-11)


### Bug Fixes

* **component-testing:** fix issue with react-scripts ([c4e6de7](https://github.com/staccx/bento/commit/c4e6de7))


### Features

* **aprila-theme:** layouting by level ([1bbabe4](https://github.com/staccx/bento/commit/1bbabe4))
* **base:** add Breadcrumb base component ([3e52473](https://github.com/staccx/bento/commit/3e52473))
* **base:** added first hook, useSearch ([74137c6](https://github.com/staccx/bento/commit/74137c6))
* **base:** useSearch now bundled in base ([5246e4c](https://github.com/staccx/bento/commit/5246e4c))
* **bento:** updated react to 16.8 ([89e8a70](https://github.com/staccx/bento/commit/89e8a70))
* **json-schema:** add better customization for array fields ([f40d182](https://github.com/staccx/bento/commit/f40d182))



# [8.59.0](https://github.com/staccx/bento/compare/v8.58.1...v8.59.0) (2019-02-05)


### Bug Fixes

* **aprila-theme:** fix for i18n stuff ([7ee443e](https://github.com/staccx/bento/commit/7ee443e))
* **bank-in-a-box:** change key names for Ts ([b705dc3](https://github.com/staccx/bento/commit/b705dc3))


### Features

* **cli:** improvements to i18n command ([3c9a133](https://github.com/staccx/bento/commit/3c9a133))



## [8.58.1](https://github.com/staccx/bento/compare/v8.58.0...v8.58.1) (2019-02-05)


### Bug Fixes

* **aprila:** fix select absolute being ugly ([9845ae5](https://github.com/staccx/bento/commit/9845ae5))



# [8.58.0](https://github.com/staccx/bento/compare/v8.57.0...v8.58.0) (2019-02-05)


### Bug Fixes

* **aprila-theme:** fix missing dep ([256e67f](https://github.com/staccx/bento/commit/256e67f))


### Features

* **bento:** consolidation ([c524bc9](https://github.com/staccx/bento/commit/c524bc9))
* **release:** release script will now run prettier for all chngd packes ([e451b2b](https://github.com/staccx/bento/commit/e451b2b))



# [8.57.0](https://github.com/staccx/bento/compare/v8.56.2...v8.57.0) (2019-02-04)


### Features

* **bento:** fix test regime + consolidatet eslint packages ([0cc561a](https://github.com/staccx/bento/commit/0cc561a))



## [8.56.2](https://github.com/staccx/bento/compare/v8.56.1...v8.56.2) (2019-02-04)


### Bug Fixes

* **cli:** fix bentoroot ([fdd1a31](https://github.com/staccx/bento/commit/fdd1a31))



## [8.56.1](https://github.com/staccx/bento/compare/v8.56.0...v8.56.1) (2019-02-04)



# [8.56.0](https://github.com/staccx/bento/compare/v8.55.1...v8.56.0) (2019-02-04)


### Features

* **cli:** new command create. only app is supported atm ([dd61079](https://github.com/staccx/bento/commit/dd61079))



## [8.55.1](https://github.com/staccx/bento/compare/v8.55.0...v8.55.1) (2019-02-02)


### Bug Fixes

* **aprila-theme:** fix spinner ([775cb2a](https://github.com/staccx/bento/commit/775cb2a))



# [8.55.0](https://github.com/staccx/bento/compare/v8.54.0...v8.55.0) (2019-02-02)


### Bug Fixes

* **i18n:** add logging to component ([b4498ba](https://github.com/staccx/bento/commit/b4498ba))


### Features

* **aprila-theme:** add spinner ([28ed8c5](https://github.com/staccx/bento/commit/28ed8c5))
* **bank-in-a-box:** continue work with i18n ([488fd48](https://github.com/staccx/bento/commit/488fd48))
* **cli:** move i18n to own script. add translate and better traversal ([7d0dbc8](https://github.com/staccx/bento/commit/7d0dbc8))



# [8.54.0](https://github.com/staccx/bento/compare/v8.53.0...v8.54.0) (2019-01-31)


### Features

* **aprila-theme:** changes ([6b2074c](https://github.com/staccx/bento/commit/6b2074c))
* **base:** input can now have element as helptext ([b932f94](https://github.com/staccx/bento/commit/b932f94))
* **fsm:** add empty shell module fsm ([3c96e42](https://github.com/staccx/bento/commit/3c96e42))
* **i18n:** add multiple formats in formatters. add test ([7bad7a7](https://github.com/staccx/bento/commit/7bad7a7))
* **json-schema:** radios, labels, transforms ([5ff241d](https://github.com/staccx/bento/commit/5ff241d))
* **sanity:** add fallback to text if not array ([f58aca5](https://github.com/staccx/bento/commit/f58aca5))



# [8.53.0](https://github.com/staccx/bento/compare/v8.52.0...v8.53.0) (2019-01-30)


### Bug Fixes

* **base:** combobox filter prop type ([96c0f52](https://github.com/staccx/bento/commit/96c0f52))
* **base:** fix help button type. add icons ([398d450](https://github.com/staccx/bento/commit/398d450))


### Features

* **aprila-theme:** add alert theming ([5ef48b3](https://github.com/staccx/bento/commit/5ef48b3))
* **aprila-theme:** help box themes ([2074d31](https://github.com/staccx/bento/commit/2074d31))
* **cli:** add support for config files for figma command ([5493b00](https://github.com/staccx/bento/commit/5493b00))
* **json-schema:** add alert default variant ([1c69539](https://github.com/staccx/bento/commit/1c69539))
* **json-schema:** add more custom fields. fix circ ([5920ce4](https://github.com/staccx/bento/commit/5920ce4))
* **json-schema:** move add-button below array ([713aa23](https://github.com/staccx/bento/commit/713aa23))



# [8.52.0](https://github.com/staccx/bento/compare/v8.51.1...v8.52.0) (2019-01-24)


### Bug Fixes

* **cli:** fix versions for eslint to work with cra ([dca7fdc](https://github.com/staccx/bento/commit/dca7fdc))


### Features

* **cli:** add eslint command. installs eslint and pkgs ([2dc1f3e](https://github.com/staccx/bento/commit/2dc1f3e))
* **cli:** add figma integration ([654279d](https://github.com/staccx/bento/commit/654279d))



## [8.51.1](https://github.com/staccx/bento/compare/v8.51.0...v8.51.1) (2019-01-22)


### Bug Fixes

* **fundu-theme:** attention seeker ([4e86b41](https://github.com/staccx/bento/commit/4e86b41))



# [8.51.0](https://github.com/staccx/bento/compare/v8.50.2...v8.51.0) (2019-01-22)


### Bug Fixes

* **base:** fix slider handle type no form submit ([0b4b5cf](https://github.com/staccx/bento/commit/0b4b5cf))
* **cli:** fix link with no target ([4cd9a93](https://github.com/staccx/bento/commit/4cd9a93))


### Features

* **base:** add initialDelay to Get ([18fc57f](https://github.com/staccx/bento/commit/18fc57f))
* **cli:** bento link [target] now possible ([6c582b4](https://github.com/staccx/bento/commit/6c582b4))
* **fundu-theme:** notifications ([2fa0980](https://github.com/staccx/bento/commit/2fa0980))



## [8.50.2](https://github.com/staccx/bento/compare/v8.50.1...v8.50.2) (2019-01-18)


### Bug Fixes

* **aprila-theme:** fix checkboxes with more lines ([7686040](https://github.com/staccx/bento/commit/7686040))



## [8.50.1](https://github.com/staccx/bento/compare/v8.50.0...v8.50.1) (2019-01-17)


### Bug Fixes

* **aprila-theme:** minor tweaks ([ca17a4b](https://github.com/staccx/bento/commit/ca17a4b))



# [8.50.0](https://github.com/staccx/bento/compare/v8.49.0...v8.50.0) (2019-01-17)


### Bug Fixes

* **base:** remove prop variant. implicit ([b9f9c7c](https://github.com/staccx/bento/commit/b9f9c7c))


### Features

* **aprila-theme:** add resets. add styling ([f9e5eec](https://github.com/staccx/bento/commit/f9e5eec))
* **json-schema:** schemaField is now added. change error ([50fb687](https://github.com/staccx/bento/commit/50fb687))
* **sanit:** add SanityBlockContent and serializers ([21d9711](https://github.com/staccx/bento/commit/21d9711))



# [8.49.0](https://github.com/staccx/bento/compare/v8.48.0...v8.49.0) (2019-01-14)


### Features

* **aprila-theme:** add themes for onboarding ([169761c](https://github.com/staccx/bento/commit/169761c))



# [8.48.0](https://github.com/staccx/bento/compare/v8.47.0...v8.48.0) (2019-01-14)


### Bug Fixes

* **base:** fix toggle variants ([85e43d0](https://github.com/staccx/bento/commit/85e43d0))
* **swedbank-theme:** add more styles ([2c226b7](https://github.com/staccx/bento/commit/2c226b7))


### Features

* **base:** add ability to set state to steps ([491fcfe](https://github.com/staccx/bento/commit/491fcfe))
* **base:** add new convenience gradient ([4b0632f](https://github.com/staccx/bento/commit/4b0632f))
* **base:** add new hoc Steps ([03b0ea8](https://github.com/staccx/bento/commit/03b0ea8))
* **base:** getProps can now accept only prop. added test ([91d3a51](https://github.com/staccx/bento/commit/91d3a51))
* **cli:** link now alerts build errors and show error ([5a294dc](https://github.com/staccx/bento/commit/5a294dc))
* **i18n:** add new component Convert ([698d4b8](https://github.com/staccx/bento/commit/698d4b8))
* **sanity-plugin-i18n:** add support for language parts ([d2db33e](https://github.com/staccx/bento/commit/d2db33e))
* **savings-advisor:** add more components ([865067f](https://github.com/staccx/bento/commit/865067f))
* **savings-advisor:** add more presentation components for steps ([e1c8026](https://github.com/staccx/bento/commit/e1c8026))
* **swedbank-theme:** add temp variants ([49a0eff](https://github.com/staccx/bento/commit/49a0eff))



# [8.47.0](https://github.com/staccx/bento/compare/v8.46.1...v8.47.0) (2019-01-08)


### Features

* **open-api:** add more state flags. add setuser to provider ([c611580](https://github.com/staccx/bento/commit/c611580))



## [8.46.1](https://github.com/staccx/bento/compare/v8.46.0...v8.46.1) (2019-01-08)


### Bug Fixes

* **base:** fix search warn if no docs provided ([23ecd63](https://github.com/staccx/bento/commit/23ecd63))



# [8.46.0](https://github.com/staccx/bento/compare/v8.45.0...v8.46.0) (2019-01-07)


### Bug Fixes

* **aprila-theme:** fix styles ([e77c613](https://github.com/staccx/bento/commit/e77c613))
* **base:** updated react-traverse dep ([b607f3c](https://github.com/staccx/bento/commit/b607f3c))
* **stacc-website:** fix(?) menu ([f486db0](https://github.com/staccx/bento/commit/f486db0))


### Features

* **bank-in-a-box:** remove mock data and add props ([6a46ec7](https://github.com/staccx/bento/commit/6a46ec7))
* **base:** add Form can now find granchildrend and setup validation ([90826d4](https://github.com/staccx/bento/commit/90826d4))
* **cli:** link now has default param for input ([c9ffc14](https://github.com/staccx/bento/commit/c9ffc14))
* **component-testing:** add example for forms ([7f4bef8](https://github.com/staccx/bento/commit/7f4bef8))
* **rollup-config:** add support for custom input ([b599b47](https://github.com/staccx/bento/commit/b599b47))
* **stacc-website:** updated sanity deps ([fa130f0](https://github.com/staccx/bento/commit/fa130f0))



# [8.45.0](https://github.com/staccx/bento/compare/v8.44.1...v8.45.0) (2019-01-02)


### Features

* **bank-in-a-box:** added EndAccountConfirmation ([4ae3b7f](https://github.com/staccx/bento/commit/4ae3b7f))



## [8.44.1](https://github.com/staccx/bento/compare/v8.44.0...v8.44.1) (2019-01-02)


### Bug Fixes

* **formatting:** add nbsp as default for thousand seperator ([0dfd4c8](https://github.com/staccx/bento/commit/0dfd4c8))



# [8.44.0](https://github.com/staccx/bento/compare/v8.43.0...v8.44.0) (2019-01-02)


### Features

* **bank-in-a-box:** accountHeading moved to each theme ([6e15d1c](https://github.com/staccx/bento/commit/6e15d1c))
* **bank-in-a-box:** added endAccount-page ([b6efa4a](https://github.com/staccx/bento/commit/b6efa4a))
* **open-id:** export signInRedirectCallback ([3286dec](https://github.com/staccx/bento/commit/3286dec))



# [8.43.0](https://github.com/staccx/bento/compare/v8.42.1...v8.43.0) (2019-01-02)


### Bug Fixes

* **aprila-theme:** support for NavLink ([6420f25](https://github.com/staccx/bento/commit/6420f25))


### Features

* **aprila-theme:** menu in header ([8438314](https://github.com/staccx/bento/commit/8438314))
* **fundu-theme:** menu in header responsive ([5d5d4eb](https://github.com/staccx/bento/commit/5d5d4eb))



## [8.42.1](https://github.com/staccx/bento/compare/v8.42.0...v8.42.1) (2019-01-02)


### Bug Fixes

* **cli:** add babel-core to deps ([24e9c83](https://github.com/staccx/bento/commit/24e9c83))



# [8.42.0](https://github.com/staccx/bento/compare/v8.41.0...v8.42.0) (2019-01-02)


### Features

* **bank-in-a-box:** exported pages independently ([ad568de](https://github.com/staccx/bento/commit/ad568de))



# [8.41.0](https://github.com/staccx/bento/compare/v8.40.3...v8.41.0) (2019-01-01)


### Bug Fixes

* **cli:** fixed link dep ([0d36393](https://github.com/staccx/bento/commit/0d36393))
* **json-schema:** fix circular references ([98e51bd](https://github.com/staccx/bento/commit/98e51bd))


### Features

* **aprila-theme:** styling primarily citizenship selector ([694dda4](https://github.com/staccx/bento/commit/694dda4))
* **json-schema:** add changes mostly related to citizenship selector ([1bbb02b](https://github.com/staccx/bento/commit/1bbb02b))
* **json-schema:** ready for usage as module ([bfd9833](https://github.com/staccx/bento/commit/bfd9833))



## [8.40.3](https://github.com/staccx/bento/compare/v8.40.2...v8.40.3) (2018-12-19)


### Bug Fixes

* **cli:** add ora dep ([00e1f55](https://github.com/staccx/bento/commit/00e1f55))
* **cli:** deps ([e41512a](https://github.com/staccx/bento/commit/e41512a))


### Features

* **aprila-theme:** manage headings level based styling ([552873b](https://github.com/staccx/bento/commit/552873b))



## [8.40.2](https://github.com/staccx/bento/compare/v8.40.1...v8.40.2) (2018-12-19)


### Bug Fixes

* **cli:** getting ready ([d191e71](https://github.com/staccx/bento/commit/d191e71))



## [8.40.1](https://github.com/staccx/bento/compare/v8.40.0...v8.40.1) (2018-12-19)


### Bug Fixes

* **cli:** checking git after building ([7f6d2dd](https://github.com/staccx/bento/commit/7f6d2dd))



# [8.40.0](https://github.com/staccx/bento/compare/v8.39.10...v8.40.0) (2018-12-19)


### Bug Fixes

* **cli:** logging moar ([2d13132](https://github.com/staccx/bento/commit/2d13132))



## [8.39.10](https://github.com/staccx/bento/compare/v8.39.9...v8.39.10) (2018-12-19)


### Bug Fixes

* **cli:** debug ([41cac2a](https://github.com/staccx/bento/commit/41cac2a))



## [8.39.9](https://github.com/staccx/bento/compare/v8.39.8...v8.39.9) (2018-12-19)


### Bug Fixes

* **cli:** debug ([e5184cc](https://github.com/staccx/bento/commit/e5184cc))


### Features

* **json-schema:** adapt to last changes to aprila-theme ([12d430b](https://github.com/staccx/bento/commit/12d430b))



## [8.39.8](https://github.com/staccx/bento/compare/v8.39.7...v8.39.8) (2018-12-19)


### Bug Fixes

* **cli:** debugging. need bump ([0e0d395](https://github.com/staccx/bento/commit/0e0d395))



## [8.39.7](https://github.com/staccx/bento/compare/v8.39.6...v8.39.7) (2018-12-19)


### Bug Fixes

* **cli:** back to from-package (lerna version 3.6 needed) ([5afd09d](https://github.com/staccx/bento/commit/5afd09d))
* **cli:** changed to from-git ([49e2b46](https://github.com/staccx/bento/commit/49e2b46))



## [8.39.6](https://github.com/staccx/bento/compare/v8.39.5...v8.39.6) (2018-12-19)


### Bug Fixes

* **cli:** add log to stdErr ([1872465](https://github.com/staccx/bento/commit/1872465))


### Features

* **aprila-theme:** add various styling for json-schema ([037b49b](https://github.com/staccx/bento/commit/037b49b))



## [8.39.5](https://github.com/staccx/bento/compare/v8.39.4...v8.39.5) (2018-12-19)


### Bug Fixes

* **cli:** temp. debugging ([47eaf03](https://github.com/staccx/bento/commit/47eaf03))



## [8.39.4](https://github.com/staccx/bento/compare/v8.39.3...v8.39.4) (2018-12-19)


### Bug Fixes

* **cli:** back to package. remove force publish ([34745f0](https://github.com/staccx/bento/commit/34745f0))
* **cli:** trying from-git ([b40589e](https://github.com/staccx/bento/commit/b40589e))



## [8.39.3](https://github.com/staccx/bento/compare/v8.39.2...v8.39.3) (2018-12-19)


### Bug Fixes

* **cli:** fix positionals to publish ([1eddf24](https://github.com/staccx/bento/commit/1eddf24))



## [8.39.2](https://github.com/staccx/bento/compare/v8.39.1...v8.39.2) (2018-12-19)


### Bug Fixes

* **cli:** deps updated. spinner info ([b1729dd](https://github.com/staccx/bento/commit/b1729dd))



## [8.39.1](https://github.com/staccx/bento/compare/v8.39.0...v8.39.1) (2018-12-18)


### Bug Fixes

* **cli:** devdeps moved to deps ([9a20a17](https://github.com/staccx/bento/commit/9a20a17))
* **cli:** fix for npm releases ([be8586a](https://github.com/staccx/bento/commit/be8586a))



# [8.39.0](https://github.com/staccx/bento/compare/v8.38.1...v8.39.0) (2018-12-18)


### Features

* **cli:** made public ([bd06448](https://github.com/staccx/bento/commit/bd06448))



## [8.38.1](https://github.com/staccx/bento/compare/v8.38.0...v8.38.1) (2018-12-18)


### Bug Fixes

* **cli:** remove no-push ([c3af9f7](https://github.com/staccx/bento/commit/c3af9f7))



# [8.38.0](https://github.com/staccx/bento/compare/v8.37.0...v8.38.0) (2018-12-18)


### Bug Fixes

* **base:** RadioPillItem value now PropTypes.any ([2b00e79](https://github.com/staccx/bento/commit/2b00e79))
* **cli:** fix versioning... i hope ([4ab479d](https://github.com/staccx/bento/commit/4ab479d))


### Features

* **aprila-theme:** add styling to json-schema [wip] ([7d000fb](https://github.com/staccx/bento/commit/7d000fb))
* **cli:** add call to version to force semantic ([f73c8e7](https://github.com/staccx/bento/commit/f73c8e7))
* **cli:** add new command 'link' ([e6645e2](https://github.com/staccx/bento/commit/e6645e2))
* **feature-toggle:** chadd translations ([05a3927](https://github.com/staccx/bento/commit/05a3927))
* **fundu-theme:** add adjustments to pageselect / radiopills ([8a280c6](https://github.com/staccx/bento/commit/8a280c6))
* **fundu-theme:** change variant name to reflect changes in fundu web ([9fec439](https://github.com/staccx/bento/commit/9fec439))
* **fundu-theme:** radiopill styling ([e9dbad4](https://github.com/staccx/bento/commit/e9dbad4))
* **fundu-theme:** stylin’ the pills ([0309b29](https://github.com/staccx/bento/commit/0309b29))
* **json-schema:** adapt to aprila-theme changes [wip] ([a4a9675](https://github.com/staccx/bento/commit/a4a9675))
* **json-schema:** add dynamic Citizenship field ([ef59e75](https://github.com/staccx/bento/commit/ef59e75))
* **json-schema:** add support for radio++ ([22ec8f0](https://github.com/staccx/bento/commit/22ec8f0))
* **json-schema:** citizenship now uses combobox ([4260ecb](https://github.com/staccx/bento/commit/4260ecb))
* **json-schema:** finish first draft schema ([841b680](https://github.com/staccx/bento/commit/841b680))
* **json-schema:** import webfonts + globalstyle ([1aff66a](https://github.com/staccx/bento/commit/1aff66a))
* **json-schema:** initial onboarding schema ([58a825e](https://github.com/staccx/bento/commit/58a825e))
* **loan-schema:** add highlight box ([41d9d75](https://github.com/staccx/bento/commit/41d9d75))
* **sanity-plugin-i18n:** add translationValue as type ([085c9d1](https://github.com/staccx/bento/commit/085c9d1))
* **swedbank-theme:** prepare for release ([b5858b1](https://github.com/staccx/bento/commit/b5858b1))



# [8.37.0](https://github.com/staccx/bento/compare/v8.36.0...v8.37.0) (2018-12-14)


### Bug Fixes

* **base:** fix issue with select and wrapping ([fb38852](https://github.com/staccx/bento/commit/fb38852))
* **fundu-theme:** tweak notification animation ([11ffa01](https://github.com/staccx/bento/commit/11ffa01))


### Features

* **eslint-config:** add atob and btoa to globals ([eabf9cf](https://github.com/staccx/bento/commit/eabf9cf))
* **json-schema:** can now render selects and arrays ([14b9d1c](https://github.com/staccx/bento/commit/14b9d1c))
* **json-schema:** support conditionals. control over schema ([fe485f4](https://github.com/staccx/bento/commit/fe485f4))



# [8.36.0](https://github.com/staccx/bento/compare/v8.35.0...v8.36.0) (2018-12-13)


### Bug Fixes

* **base:** combobox root props. get now props only and unmounts on poll ([9e37f9d](https://github.com/staccx/bento/commit/9e37f9d))
* **base:** fix select keyboardinput. 🤞 ([5a12874](https://github.com/staccx/bento/commit/5a12874))


### Features

* **base:** expose themeProps in export ([bc775ee](https://github.com/staccx/bento/commit/bc775ee))
* **fundu-theme:** add button bounce variation ([aab8c4b](https://github.com/staccx/bento/commit/aab8c4b))
* **json-schema:** create new module ([fde7a17](https://github.com/staccx/bento/commit/fde7a17))



# [8.35.0](https://github.com/staccx/bento/compare/v8.34.1...v8.35.0) (2018-12-12)


### Bug Fixes

* **loan-process:** move localforage to devDeps ([15b93b7](https://github.com/staccx/bento/commit/15b93b7))


### Features

* **cli:** add clean command ([364e96e](https://github.com/staccx/bento/commit/364e96e))
* **loan-process:** big text with prop controlled styled component ([cad7cb0](https://github.com/staccx/bento/commit/cad7cb0))
* **loan-process:** test adding className to big item in calculator ([f0638ce](https://github.com/staccx/bento/commit/f0638ce))



## [8.34.1](https://github.com/staccx/bento/compare/v8.34.0...v8.34.1) (2018-12-11)


### Bug Fixes

* **base:** fix odometer explisitely proptyping variant as string ([c94b5e7](https://github.com/staccx/bento/commit/c94b5e7))
* **loan-process:** fix typo) ([ac0c8bd](https://github.com/staccx/bento/commit/ac0c8bd))



# [8.34.0](https://github.com/staccx/bento/compare/v8.33.0...v8.34.0) (2018-12-11)


### Features

* **loan-process:** add monthly interest flag and render. + big ([1827787](https://github.com/staccx/bento/commit/1827787))



# [8.33.0](https://github.com/staccx/bento/compare/v8.32.0...v8.33.0) (2018-12-10)


### Bug Fixes

* **cli:** better status ([bc465fc](https://github.com/staccx/bento/commit/bc465fc))
* **cli:** fix fetch not being done before checking status ([399feda](https://github.com/staccx/bento/commit/399feda))
* **fundu-theme:** flag, article variant, fix margins for nested wrappers ([426c6a9](https://github.com/staccx/bento/commit/426c6a9))
* **i18n:** fix data replacer only replacing first instance ([7317f79](https://github.com/staccx/bento/commit/7317f79))


### Features

* **cli:** add check for remote changes ([b8ec4f5](https://github.com/staccx/bento/commit/b8ec4f5))
* **fundu-theme:** various adjustments to calculator ([1caec29](https://github.com/staccx/bento/commit/1caec29))



# [8.32.0](https://github.com/staccx/bento/compare/v8.31.0...v8.32.0) (2018-12-06)


### Bug Fixes

* **base:** fix defaultValue for cleave inputs ([a8aa524](https://github.com/staccx/bento/commit/a8aa524))
* **bento:** add link info to yalc docs ([a3ff0b5](https://github.com/staccx/bento/commit/a3ff0b5))
* **i18n:** fix children not rendering as fallback. fix early no key ([577d05f](https://github.com/staccx/bento/commit/577d05f))


### Features

* **bento:** add yalc how to ([b763454](https://github.com/staccx/bento/commit/b763454))
* **fundu-theme:** add body copy variant for headings and lists ([64738e7](https://github.com/staccx/bento/commit/64738e7))
* **fundu-theme:** add flag styling ([f82797a](https://github.com/staccx/bento/commit/f82797a))
* **open-id:** change how usermanager is init. now can take new props ([981d09b](https://github.com/staccx/bento/commit/981d09b))



# [8.31.0](https://github.com/staccx/bento/compare/v8.30.0...v8.31.0) (2018-12-05)


### Features

* **bank-in-a-box:** biab is now a public(private) package ([8fa6804](https://github.com/staccx/bento/commit/8fa6804))



# [8.30.0](https://github.com/staccx/bento/compare/v8.29.0...v8.30.0) (2018-12-04)


### Features

* **fundu-theme:** add default styling to rich text component ([374b0a8](https://github.com/staccx/bento/commit/374b0a8))
* **fundu-theme:** various styling progressbar and buttons ([c8d283d](https://github.com/staccx/bento/commit/c8d283d))
* **loan-process:** exposed SignDocument as component to export ([1d911a6](https://github.com/staccx/bento/commit/1d911a6))



# [8.29.0](https://github.com/staccx/bento/compare/v8.28.0...v8.29.0) (2018-12-03)


### Features

* **base:** add debouncing to CompanyInput ([8ae8da4](https://github.com/staccx/bento/commit/8ae8da4))



# [8.28.0](https://github.com/staccx/bento/compare/v8.27.0...v8.28.0) (2018-12-03)


### Bug Fixes

* **i18n:** fix children not overriding actual value ([6498669](https://github.com/staccx/bento/commit/6498669))


### Features

* **fundu-theme:** add style for notification button ([2af71fd](https://github.com/staccx/bento/commit/2af71fd))



# [8.27.0](https://github.com/staccx/bento/compare/v8.26.0...v8.27.0) (2018-11-30)


### Bug Fixes

* **loan-process:** add disabled buttons for invalid forms. FUN-239 ([2052500](https://github.com/staccx/bento/commit/2052500))
* **loan-process:** fix default value for paymentCash ([70ebd5e](https://github.com/staccx/bento/commit/70ebd5e))
* **loan-process:** improve error messaging ([9651620](https://github.com/staccx/bento/commit/9651620))
* **loan-process:** slider can now step properly ([8e6c6bc](https://github.com/staccx/bento/commit/8e6c6bc))


### Features

* **base:** add onKeyDown event to Slider2 ([a53a9e5](https://github.com/staccx/bento/commit/a53a9e5))



# [8.26.0](https://github.com/staccx/bento/compare/v8.25.0...v8.26.0) (2018-11-29)


### Bug Fixes

* **base:** allow Select to send initialSelection ([35ab3a3](https://github.com/staccx/bento/commit/35ab3a3))
* **loan-process:** fix issues hiding terms and explanation. update demo ([fee07d9](https://github.com/staccx/bento/commit/fee07d9))


### Features

* **cli:** add release to commands ([c6a2234](https://github.com/staccx/bento/commit/c6a2234))
* **release-bento:** deprecating release-bento. replaced with cli ([b2efb2a](https://github.com/staccx/bento/commit/b2efb2a))
* **stacc-web:** fullsize menu WIP ([3bc2735](https://github.com/staccx/bento/commit/3bc2735))
* **stacc-website:** fix whitespace on case-study, clients ([dd59903](https://github.com/staccx/bento/commit/dd59903))
* **stacc-website:** lazy loading with suspense ([4496668](https://github.com/staccx/bento/commit/4496668))
* **stacc-website:** less broken fullsize menu ([bf1f362](https://github.com/staccx/bento/commit/bf1f362))



# [8.25.0](https://github.com/staccx/bento/compare/v8.24.0...v8.25.0) (2018-11-27)


### Bug Fixes

* **base:** add suppress to select for refs. get can now fetch anew ([6f66c0d](https://github.com/staccx/bento/commit/6f66c0d))


### Features

* **fundu-theme:** started logged-in styling ([d13d0ff](https://github.com/staccx/bento/commit/d13d0ff))



# [8.24.0](https://github.com/staccx/bento/compare/v8.23.0...v8.24.0) (2018-11-27)


### Bug Fixes

* **base:** fix controlled value for input with formatting ([01eb564](https://github.com/staccx/bento/commit/01eb564))
* **loan-process:** fix currency input in calculator ([4a863d2](https://github.com/staccx/bento/commit/4a863d2))


### Features

* **aprila-theme:** fix mobile layout + sizing ([a73b13b](https://github.com/staccx/bento/commit/a73b13b))
* **aprila-theme:** theme now has full-width header ([5c08456](https://github.com/staccx/bento/commit/5c08456))
* **bank-in-a-box:** added an AccountHeading instead of reusing Account ([d6f190b](https://github.com/staccx/bento/commit/d6f190b))
* **bank-in-a-box:** annualStatement with values ([e36492a](https://github.com/staccx/bento/commit/e36492a))
* **bank-in-a-box:** fix profile-menu for aprila ([2c59e98](https://github.com/staccx/bento/commit/2c59e98))
* **bank-in-a-box:** loan also has it's own header-component now ([e1b24c8](https://github.com/staccx/bento/commit/e1b24c8))
* **base:** add BirthdateInput (EXPERIMENTAL) ([46efa71](https://github.com/staccx/bento/commit/46efa71))
* **base:** add optional help button + text to input fields ([59727a7](https://github.com/staccx/bento/commit/59727a7))
* **base:** add props, lots of props ([10c44a3](https://github.com/staccx/bento/commit/10c44a3))
* **base:** add some support for variants in birthdateinputs ([8fa2d96](https://github.com/staccx/bento/commit/8fa2d96))
* **base:** forward more props to Inputs in BirthdateInput ([20ea2c6](https://github.com/staccx/bento/commit/20ea2c6))
* **base:** forward variant to children in BirthdateInput ([8dc055d](https://github.com/staccx/bento/commit/8dc055d))
* **base:** improve BirthdateInput ([8a0b47a](https://github.com/staccx/bento/commit/8a0b47a))
* **base:** improve Slider2 focus behaviour ([916de82](https://github.com/staccx/bento/commit/916de82))
* **base:** set helpbutton line-height to 0 to control size ([55aa1b3](https://github.com/staccx/bento/commit/55aa1b3))
* **component-testing:** add some space to work ([7563a63](https://github.com/staccx/bento/commit/7563a63))
* **fundu-theme:** add focus style ++ to sign list ([fb50ef4](https://github.com/staccx/bento/commit/fb50ef4))
* **fundu-theme:** add focus styling to calculatorTerms button ([6b6c5a6](https://github.com/staccx/bento/commit/6b6c5a6))
* **fundu-theme:** add help button + help text styling ([c9b9fc0](https://github.com/staccx/bento/commit/c9b9fc0))
* **fundu-theme:** add radiobuttons styling ([472aaf9](https://github.com/staccx/bento/commit/472aaf9))
* **fundu-theme:** add slider input + handle focus ([6e58ada](https://github.com/staccx/bento/commit/6e58ada))
* **fundu-theme:** button + focus styling ([7f1cf69](https://github.com/staccx/bento/commit/7f1cf69))
* **fundu-theme:** focusable and more user-friendly radio pills ([6ddacda](https://github.com/staccx/bento/commit/6ddacda))
* **fundu-theme:** focusable and more user-friendly radio pills ([bedc28e](https://github.com/staccx/bento/commit/bedc28e))
* **fundu-theme:** modify focus state for button add variant ([18deaf5](https://github.com/staccx/bento/commit/18deaf5))
* **loan-process:** add helptext-possibility to fields ([2462a2c](https://github.com/staccx/bento/commit/2462a2c))
* **loan-process:** add radiobuttons for show/hide cash payment field ([4e2e154](https://github.com/staccx/bento/commit/4e2e154))
* **loan-process:** add variant prop to OfferTable ([4e0b607](https://github.com/staccx/bento/commit/4e0b607))
* **loan-process:** layout adjustment + endscreen button variant ([9e6cb7a](https://github.com/staccx/bento/commit/9e6cb7a))
* **loan-process:** small corrections & styling ([573c2bf](https://github.com/staccx/bento/commit/573c2bf))
* **styrke-theme:** color addition ([5190dcc](https://github.com/staccx/bento/commit/5190dcc))
* **styrke-theme:** label help button and select fields styling ([a77c81a](https://github.com/staccx/bento/commit/a77c81a))
* **styrke-theme:** use help text in field labels ([cb158f5](https://github.com/staccx/bento/commit/cb158f5))
* **styrke-theme:** various styling, mainly :focus related ([9f766e9](https://github.com/staccx/bento/commit/9f766e9))
* **theme-fundu:** add expands + wrappers styling ([438f264](https://github.com/staccx/bento/commit/438f264))



# [8.23.0](https://github.com/staccx/bento/compare/v8.22.0...v8.23.0) (2018-11-20)


### Bug Fixes

* **bank-in-a-box:** remove unused icons ([1cd421f](https://github.com/staccx/bento/commit/1cd421f))
* **base:** fix copytoClipBoardComponent + variant for fundu ([74f3b8c](https://github.com/staccx/bento/commit/74f3b8c))
* **base:** justify now works as intended on pack ([a81ff4d](https://github.com/staccx/bento/commit/a81ff4d))
* **developer-portal:** forgot to add this to tile-fix ([83976fc](https://github.com/staccx/bento/commit/83976fc))
* **fundu-theme:** fix for left centered tiles ([e1c027a](https://github.com/staccx/bento/commit/e1c027a))
* **loan-process:** enable variant_default for end screen button ([87c21b2](https://github.com/staccx/bento/commit/87c21b2))
* **styleguide:** fix globalstyles etc ([d202db2](https://github.com/staccx/bento/commit/d202db2))
* **styrke-theme:** adjustments after fundu and loan-process changes ([921d74e](https://github.com/staccx/bento/commit/921d74e))


### Features

* **aprila-theme:** fix menu ([a46892f](https://github.com/staccx/bento/commit/a46892f))
* **bank-in-a-box:** added support for two types of menus ([97fa3ca](https://github.com/staccx/bento/commit/97fa3ca))
* **bank-in-a-box:** heading on transactions + filter ([d4e5f09](https://github.com/staccx/bento/commit/d4e5f09))
* **bank-in-a-box:** refactor filters on transactions ([90f2955](https://github.com/staccx/bento/commit/90f2955))
* **base:** reimplement flag with flex ([39858bb](https://github.com/staccx/bento/commit/39858bb))
* **cli:** add cli for creating local i18n files ([9889e02](https://github.com/staccx/bento/commit/9889e02))
* **cli-x:** add i18n command with options ([eaee47b](https://github.com/staccx/bento/commit/eaee47b))
* **component-testing:** add tests for new i18n and cli func ([028ca65](https://github.com/staccx/bento/commit/028ca65))
* **component-testing:** adding i18n to comp testing ([baa04a5](https://github.com/staccx/bento/commit/baa04a5))
* **fundu-theme:** a lot of adjustments for API Management ([3ba2c45](https://github.com/staccx/bento/commit/3ba2c45))
* **fundu-theme:** add checkbox variant iamdisabled ([fe62c6e](https://github.com/staccx/bento/commit/fe62c6e))
* **fundu-theme:** minor select focus styling ([c72fe61](https://github.com/staccx/bento/commit/c72fe61))
* **fundu-theme:** smaller menu ([6939413](https://github.com/staccx/bento/commit/6939413))
* **i18n:** add ability to pass react comp as child for fallback ([253d325](https://github.com/staccx/bento/commit/253d325))
* **loan-process:** adapt «forward buttons» for fundu-theme ([2647d49](https://github.com/staccx/bento/commit/2647d49))
* **loan-process:** set checkbox disabled for new signers ([11d3b78](https://github.com/staccx/bento/commit/11d3b78))
* **styrke-theme:** add checkbox variant iamdisabled ([e8d3ffc](https://github.com/staccx/bento/commit/e8d3ffc))
* **styrke-theme:** improved signers styling ([55a3563](https://github.com/staccx/bento/commit/55a3563))
* **theme-fundu:** add forward button styling ([ead0388](https://github.com/staccx/bento/commit/ead0388))



# [8.22.0](https://github.com/staccx/bento/compare/v8.21.0...v8.22.0) (2018-11-16)


### Bug Fixes

* **fundu-theme:** fixed dev-header ([4b922f5](https://github.com/staccx/bento/commit/4b922f5))
* **utils:** partition now returns accepted first ([9bcbcbe](https://github.com/staccx/bento/commit/9bcbcbe))


### Features

* **base:** make slider handle styleable ([cfb79b1](https://github.com/staccx/bento/commit/cfb79b1))
* **fundu-theme:** styling of api-management ([86c033c](https://github.com/staccx/bento/commit/86c033c))
* **fundu-theme:** styling of devportal menu, header, search, article ++ ([9a89b75](https://github.com/staccx/bento/commit/9a89b75))
* **stacc-theme:** add grid variants for stories ([d40e54f](https://github.com/staccx/bento/commit/d40e54f))
* **stacc-website:** add handling of aligment for stories ([f29c7cd](https://github.com/staccx/bento/commit/f29c7cd))
* **stacc-website:** add image aligment to story ([4238ab4](https://github.com/staccx/bento/commit/4238ab4))
* **styrke-theme:** fields styled for :hover and :focus ([9c4853a](https://github.com/staccx/bento/commit/9c4853a))
* **utils:** add partition function ([14162ae](https://github.com/staccx/bento/commit/14162ae))



# [8.21.0](https://github.com/staccx/bento/compare/v8.20.0...v8.21.0) (2018-11-15)


### Features

* **i18n:** add process function to allow for processing non-keyed input ([83503e8](https://github.com/staccx/bento/commit/83503e8))
* **release-bento:** add scope to ls after release ([bc25ba8](https://github.com/staccx/bento/commit/bc25ba8))



# [8.20.0](https://github.com/staccx/bento/compare/v8.19.0...v8.20.0) (2018-11-15)


### Bug Fixes

* **release-bento:** add link to changelog in success output ([440d3c8](https://github.com/staccx/bento/commit/440d3c8))


### Features

* **mr-x:** parse text and link_names ([5f11484](https://github.com/staccx/bento/commit/5f11484))
* **open-id:** add isLoading flag to LoginPassword ([e878139](https://github.com/staccx/bento/commit/e878139))



# [8.19.0](https://github.com/staccx/bento/compare/v8.18.0...v8.19.0) (2018-11-14)


### Bug Fixes

* **base:** exclude select icon button from tabindex ([3741b85](https://github.com/staccx/bento/commit/3741b85))


### Features

* **bento:** bento now uses release script ([2d6ebc4](https://github.com/staccx/bento/commit/2d6ebc4))
* **fundu-theme:** add Table variant hideHeader ([0807703](https://github.com/staccx/bento/commit/0807703))
* **fundu-theme:** highlight results in tables ([e631325](https://github.com/staccx/bento/commit/e631325))
* **fundu-theme:** style selects ([3b8f0c8](https://github.com/staccx/bento/commit/3b8f0c8))
* **loan-process:** style slider ([26be5c9](https://github.com/staccx/bento/commit/26be5c9))
* **loan-process:** use Table component for tables + style ([5209a37](https://github.com/staccx/bento/commit/5209a37))
* **mr-x:** expose postMessage function ([e125329](https://github.com/staccx/bento/commit/e125329))
* **release-bento:** add release script. not working yet ([bf8d3b4](https://github.com/staccx/bento/commit/bf8d3b4))
* **release-bento:** finished release script ([763c7b6](https://github.com/staccx/bento/commit/763c7b6))
* **styrke-theme:** style selects ([273bc68](https://github.com/staccx/bento/commit/273bc68))
* **stytrke-theme:** list styling ([0c074ac](https://github.com/staccx/bento/commit/0c074ac))



# [8.18.0](https://github.com/staccx/bento/compare/v8.17.0...v8.18.0) (2018-11-13)


### Bug Fixes

* **fundu-theme:** margin top for Heading variant="documentation" ([a736b03](https://github.com/staccx/bento/commit/a736b03))
* **open-id:** fix issue with race challenge + signin ([06406d2](https://github.com/staccx/bento/commit/06406d2))


### Features

* **loan-process:** styling of fileupload Styrke + Fundu ([77ea74a](https://github.com/staccx/bento/commit/77ea74a))



# [8.17.0](https://github.com/staccx/bento/compare/v8.16.0...v8.17.0) (2018-11-13)


### Bug Fixes

* **fundu-theme:** try to reset default autofill-color ([04647f8](https://github.com/staccx/bento/commit/04647f8))
* **sanity-web:** remove insigth company adress ([94ce37f](https://github.com/staccx/bento/commit/94ce37f))


### Features

* **stacc-theme:** add input variants and better contrast in input ([c33e87c](https://github.com/staccx/bento/commit/c33e87c))



# [8.16.0](https://github.com/staccx/bento/compare/v8.15.1...v8.16.0) (2018-11-13)


### Bug Fixes

* **base:** remove BContentY from Case ([8865d8d](https://github.com/staccx/bento/commit/8865d8d))
* **stacc-sanity:** change names and moved around ([c2dd5e8](https://github.com/staccx/bento/commit/c2dd5e8))
* **stacc-sanity:** client.caseStudies is now a reference ([a1ee0d7](https://github.com/staccx/bento/commit/a1ee0d7))
* **stacc-web:** remove extraneous bodycontent field ([ee69bf9](https://github.com/staccx/bento/commit/ee69bf9))
* **stacc-website:** remove client case study query not needed. - console ([0a19ec9](https://github.com/staccx/bento/commit/0a19ec9))


### Features

* **loan-process:** improve slider ([d07933e](https://github.com/staccx/bento/commit/d07933e))
* **sanity:** sanitylist no longer requires type ([9d61abe](https://github.com/staccx/bento/commit/9d61abe))
* **styrke-theme:** add polished + base-table styling ([d2852cf](https://github.com/staccx/bento/commit/d2852cf))



## [8.15.1](https://github.com/staccx/bento/compare/v8.15.0...v8.15.1) (2018-11-12)


### Bug Fixes

* **base:** fix wrong themeprop name for anchor ([fd6bb6a](https://github.com/staccx/bento/commit/fd6bb6a))



# [8.15.0](https://github.com/staccx/bento/compare/v8.14.0...v8.15.0) (2018-11-12)


### Bug Fixes

* **base:** fix for when using fiftyFifty for grid ([64e3a1f](https://github.com/staccx/bento/commit/64e3a1f))
* **developer-portal:** set fallback preferred lang. remove logs ([52e2def](https://github.com/staccx/bento/commit/52e2def))


### Features

* **loan-process:** replace Slider ([3ceafe7](https://github.com/staccx/bento/commit/3ceafe7))
* **mr-x:** add icon and name ([48ac36d](https://github.com/staccx/bento/commit/48ac36d))



# [8.14.0](https://github.com/staccx/bento/compare/v8.13.1...v8.14.0) (2018-11-12)


### Features

* **developer-portal:** add tiles as compomnent and export ([60409c4](https://github.com/staccx/bento/commit/60409c4))



## [8.13.1](https://github.com/staccx/bento/compare/v8.13.0...v8.13.1) (2018-11-09)


### Bug Fixes

* **developer-portal:** fix lifecycle was async ([1860316](https://github.com/staccx/bento/commit/1860316))



# [8.13.0](https://github.com/staccx/bento/compare/v8.12.0...v8.13.0) (2018-11-09)


### Features

* **developer-portal:** change how module is exported ([89926f1](https://github.com/staccx/bento/commit/89926f1))
* **loan-process:** add fileinput to step ([558a7c8](https://github.com/staccx/bento/commit/558a7c8))
* **open-id:** change LoginPassword to work as before ([8086c0d](https://github.com/staccx/bento/commit/8086c0d))
* **styrke-theme:** add new radio-pill styling ([580177d](https://github.com/staccx/bento/commit/580177d))
* **styrke-theme:** button adjustments ([412266f](https://github.com/staccx/bento/commit/412266f))
* **styrke-theme:** more loan process styling ([c1fb2c1](https://github.com/staccx/bento/commit/c1fb2c1))
* **styrke-theme:** select styling + remove redundant ([bd13885](https://github.com/staccx/bento/commit/bd13885))
* **styrke-theme:** styling loan-process WIP ([e867003](https://github.com/staccx/bento/commit/e867003))



# [8.12.0](https://github.com/staccx/bento/compare/v8.11.0...v8.12.0) (2018-11-08)


### Bug Fixes

* **loan-process:** add props to control payments + paymentsInternational ([1688fd7](https://github.com/staccx/bento/commit/1688fd7))


### Features

* **mr-x:** add mr-x with simple release warning ([777ab7b](https://github.com/staccx/bento/commit/777ab7b))
* **mr-x:** add start and done messages ([0695971](https://github.com/staccx/bento/commit/0695971))



# [8.11.0](https://github.com/staccx/bento/compare/v8.10.0...v8.11.0) (2018-11-08)


### Bug Fixes

* **base:** add dep to immutable ([f0ee050](https://github.com/staccx/bento/commit/f0ee050))


### Features

* **styrke-theme:** add correct font and weights ([1685207](https://github.com/staccx/bento/commit/1685207))
* **styrke-theme:** add focus styling to inputs and buttons ([a292f2f](https://github.com/staccx/bento/commit/a292f2f))
* **styrke-theme:** add wrapper-variants and apply ([44b1a29](https://github.com/staccx/bento/commit/44b1a29))



# [8.10.0](https://github.com/staccx/bento/compare/v8.9.0...v8.10.0) (2018-11-07)


### Features

* **aprila-theme:** started refactoring Aprila for Bank-in-box ([0edf12f](https://github.com/staccx/bento/commit/0edf12f))
* **bank-in-a-box:** more TranslatedText all over ([7db3c51](https://github.com/staccx/bento/commit/7db3c51))
* **bank-in-a-box:** remove some styled-components + svg ([07af474](https://github.com/staccx/bento/commit/07af474))
* **bank-in-a-box:** removed unused code ([eb4d23a](https://github.com/staccx/bento/commit/eb4d23a))
* **bank-in-a-box:** start on simple (ugly) feature-toggle ([c30e7a3](https://github.com/staccx/bento/commit/c30e7a3))
* **styrke-theme:** added reset + started refactoring Styrke ([9a7f7ca](https://github.com/staccx/bento/commit/9a7f7ca))
* **styrke-theme:** correct font + heading sizes ([5b11d4d](https://github.com/staccx/bento/commit/5b11d4d))



# [8.9.0](https://github.com/staccx/bento/compare/v8.8.0...v8.9.0) (2018-11-07)


### Bug Fixes

* **base:** change srcset to srcSet ([cdd1ee6](https://github.com/staccx/bento/commit/cdd1ee6))
* **base:** companyInput now checks https not http ([b71608d](https://github.com/staccx/bento/commit/b71608d))
* **developer-portal:** fix variants removed from base ([ded6a2f](https://github.com/staccx/bento/commit/ded6a2f))
* **fundu-theme:** fix docs theme ([d867903](https://github.com/staccx/bento/commit/d867903))


### Features

* **base:** add slider2 ([abf0403](https://github.com/staccx/bento/commit/abf0403))
* **base:** companyInput is now more similar to regular inputs ([0232e92](https://github.com/staccx/bento/commit/0232e92))
* **fundu-theme:** companyInput-styling for fundu ([8fa29a3](https://github.com/staccx/bento/commit/8fa29a3))
* **fundu-theme:** larger grid spacing ([182bf94](https://github.com/staccx/bento/commit/182bf94))
* **loan-process:** better styling of signing multiple documents ([f3b6a07](https://github.com/staccx/bento/commit/f3b6a07))
* **loan-process:** removed unused grid ([00daedc](https://github.com/staccx/bento/commit/00daedc))
* **loan-process:** select now similar to input ([46dd766](https://github.com/staccx/bento/commit/46dd766))
* **open-id:** export auth service and make it a prop for the provider ([0c806d5](https://github.com/staccx/bento/commit/0c806d5))
* **sanity:** add short form SanityComponent ([b29fbce](https://github.com/staccx/bento/commit/b29fbce))



# [8.8.0](https://github.com/staccx/bento/compare/v8.7.0...v8.8.0) (2018-11-06)


### Bug Fixes

* **base:** removed isRequired from children prop in HOCs ([4347cdf](https://github.com/staccx/bento/commit/4347cdf))
* **loan-process:** fix blockcontent in props ([7e30804](https://github.com/staccx/bento/commit/7e30804))
* **loan-process:** fix wrong id ([70abbd9](https://github.com/staccx/bento/commit/70abbd9))
* **loan-process:** removed unused wrapper-width ([6fba94a](https://github.com/staccx/bento/commit/6fba94a))


### Features

* **loan-process:** added labels ([be1ed7a](https://github.com/staccx/bento/commit/be1ed7a))
* **loan-process:** styling calculator ([d2b0000](https://github.com/staccx/bento/commit/d2b0000))



# [8.7.0](https://github.com/staccx/bento/compare/v8.5.0...v8.7.0) (2018-11-05)


### Bug Fixes

* **base:** fix Radiopill can now have nullable children ([a46f692](https://github.com/staccx/bento/commit/a46f692))
* **loan-process:** fix pick loan sum ([bfb4f71](https://github.com/staccx/bento/commit/bfb4f71))
* **loan-process:** name on calculator ([2099199](https://github.com/staccx/bento/commit/2099199))


### Features

* **fundu-theme:** signerFields responsive ([8e99b6a](https://github.com/staccx/bento/commit/8e99b6a))
* **loan-process:** bug-fixing ([f8e9ad3](https://github.com/staccx/bento/commit/f8e9ad3))
* **loan-process:** provideAdditionalInfo layout-fix ([f5c4631](https://github.com/staccx/bento/commit/f5c4631))
* **loan-process:** responsive calculator ([0371d0c](https://github.com/staccx/bento/commit/0371d0c))



# [8.5.0](https://github.com/staccx/bento/compare/v8.4.0...v8.5.0) (2018-11-05)


### Bug Fixes

* **loan-process:** add isLoading to addition ([7bca377](https://github.com/staccx/bento/commit/7bca377))


### Features

* **loan-process:** fixed width and spacing on PresentOffer ([c83cadd](https://github.com/staccx/bento/commit/c83cadd))



# [8.4.0](https://github.com/staccx/bento/compare/v8.3.4...v8.4.0) (2018-11-05)


### Features

* **open-id:** add debug option to OpenIdProvider ([093fb11](https://github.com/staccx/bento/commit/093fb11))



## [8.3.4](https://github.com/staccx/bento/compare/v8.3.3...v8.3.4) (2018-11-05)


### Bug Fixes

* **loan-process:** fix values for nationalId ([078e5df](https://github.com/staccx/bento/commit/078e5df))



## [8.3.3](https://github.com/staccx/bento/compare/v8.3.2...v8.3.3) (2018-11-05)


### Bug Fixes

* **loan-process:** account number rawvalue ([ce9b488](https://github.com/staccx/bento/commit/ce9b488))



## [8.3.2](https://github.com/staccx/bento/compare/v8.3.1...v8.3.2) (2018-11-05)


### Bug Fixes

* **loan-process:** fix account number value ([71039fe](https://github.com/staccx/bento/commit/71039fe))



## [8.3.1](https://github.com/staccx/bento/compare/v8.3.0...v8.3.1) (2018-11-05)


### Bug Fixes

* **loan-process:** fix animations v4 styled components ([080547f](https://github.com/staccx/bento/commit/080547f))



# [8.3.0](https://github.com/staccx/bento/compare/v8.2.5...v8.3.0) (2018-11-05)


### Bug Fixes

* **base:** fix loading not using variants ([12301f4](https://github.com/staccx/bento/commit/12301f4))
* **loan-process:** fix value in companyinput ([924a901](https://github.com/staccx/bento/commit/924a901))


### Features

* **component-testing:** add loading to tests ([9a997fd](https://github.com/staccx/bento/commit/9a997fd))



## [8.2.5](https://github.com/staccx/bento/compare/v8.2.4...v8.2.5) (2018-11-02)


### Bug Fixes

* **loan-process:** now uses search from props ([67543ad](https://github.com/staccx/bento/commit/67543ad))



## [8.2.4](https://github.com/staccx/bento/compare/v8.2.3...v8.2.4) (2018-11-02)


### Bug Fixes

* **loan-process:** fix company info validation ([82fafef](https://github.com/staccx/bento/commit/82fafef))



## [8.2.3](https://github.com/staccx/bento/compare/v8.2.2...v8.2.3) (2018-11-02)


### Bug Fixes

* **base:** fix companyInput no result ([1397f28](https://github.com/staccx/bento/commit/1397f28))



## [8.2.2](https://github.com/staccx/bento/compare/v8.2.1...v8.2.2) (2018-11-02)


### Bug Fixes

* **loan-process:** fix phone ([b2ff890](https://github.com/staccx/bento/commit/b2ff890))



## [8.2.1](https://github.com/staccx/bento/compare/v8.2.0...v8.2.1) (2018-11-02)


### Bug Fixes

* **base:** fix sliderKeyboardInput onBlur not testing ([fb313aa](https://github.com/staccx/bento/commit/fb313aa))
* **loan-process:** fix issue with inputs ([6ca50a2](https://github.com/staccx/bento/commit/6ca50a2))



# [8.2.0](https://github.com/staccx/bento/compare/v8.1.1...v8.2.0) (2018-11-02)


### Bug Fixes

* **base:** add label back to companyInput ([8eb8d5d](https://github.com/staccx/bento/commit/8eb8d5d))
* **base:** add support for placeholder again ([269b00b](https://github.com/staccx/bento/commit/269b00b))
* **base:** fix Checkbox indexer value ([cd8475e](https://github.com/staccx/bento/commit/cd8475e))
* **base:** fix individual builds. change innerRef to ref ([059d8d0](https://github.com/staccx/bento/commit/059d8d0))
* **base:** fix search strategy ([e41610f](https://github.com/staccx/bento/commit/e41610f))
* **bento:** remove isRequired from children props in hocs ([dfde249](https://github.com/staccx/bento/commit/dfde249))
* **component-testing:** updated with placeholder ([08567ff](https://github.com/staccx/bento/commit/08567ff))
* **component-testing:** updating app to commend ([7f77681](https://github.com/staccx/bento/commit/7f77681))
* **fundu-theme:** font fix, and add missing values to theme ([6d92339](https://github.com/staccx/bento/commit/6d92339))
* **loan-process:** add label back ([9e7c5fa](https://github.com/staccx/bento/commit/9e7c5fa))
* **loan-process:** fix issue with selects ([824ea79](https://github.com/staccx/bento/commit/824ea79))
* **loan-process:** label-fix ([981eea0](https://github.com/staccx/bento/commit/981eea0))
* **plop:** remove theme from plopfiles ([0c901b3](https://github.com/staccx/bento/commit/0c901b3))
* **stacc-theme:** fix color undefined ([23eaa75](https://github.com/staccx/bento/commit/23eaa75))


### Features

* **base:** add Combobox ([cfd8028](https://github.com/staccx/bento/commit/cfd8028))
* **base:** add creditcardInput. Remove text-mask ([bf00b8a](https://github.com/staccx/bento/commit/bf00b8a))
* **base:** add searchSubstring to Search ([244b791](https://github.com/staccx/bento/commit/244b791))
* **base:** add Select2 ([4d0cc64](https://github.com/staccx/bento/commit/4d0cc64))
* **base:** allow passing props to downshift component ([8d8ba20](https://github.com/staccx/bento/commit/8d8ba20))
* **base:** change how Combox renders list ([2e55e18](https://github.com/staccx/bento/commit/2e55e18))
* **base:** fix Select to use Select2 ([62b21c6](https://github.com/staccx/bento/commit/62b21c6))
* **component-testing:** add companyInput and select ([969a510](https://github.com/staccx/bento/commit/969a510))
* **component-testing:** add new app for component testing ([b13836d](https://github.com/staccx/bento/commit/b13836d))
* **component-testing:** add new app for component testing. add files ([d9ee414](https://github.com/staccx/bento/commit/d9ee414))
* **component-testing:** test all inputs with options ([2178cb6](https://github.com/staccx/bento/commit/2178cb6))
* **fundu-theme:** add heading variant and minor adjustment ([4a46b43](https://github.com/staccx/bento/commit/4a46b43))
* **fundu-theme:** add secondary color ([dc95fe0](https://github.com/staccx/bento/commit/dc95fe0))
* **fundu-theme:** reset all forms 💥💣 ([ba113ba](https://github.com/staccx/bento/commit/ba113ba))
* **i18n:** add ability to supply TranslatedText array of keys ([c0c8700](https://github.com/staccx/bento/commit/c0c8700))
* **loan-process:** add isloading flag to all ([58ba061](https://github.com/staccx/bento/commit/58ba061))
* **loan-process:** adjusting design on loan ([f048ccc](https://github.com/staccx/bento/commit/f048ccc))
* **loan-process:** make fonts and resets work again ([b194ac5](https://github.com/staccx/bento/commit/b194ac5))
* **loan-process:** register signers refactor ([fdf825e](https://github.com/staccx/bento/commit/fdf825e))
* **loan-process:** styling and refactoring. Personalia -> CompanyInfo ([1acf397](https://github.com/staccx/bento/commit/1acf397))
* **loan-process:** styling of signers ([8ca3a3f](https://github.com/staccx/bento/commit/8ca3a3f))
* **loan-process:** tweak ([ab74ed5](https://github.com/staccx/bento/commit/ab74ed5))
* **wasteiq-web:** add deploy script ([678ced0](https://github.com/staccx/bento/commit/678ced0))
* **wasteiq-web:** add more content ([8ab9998](https://github.com/staccx/bento/commit/8ab9998))
* **wasteiq-web:** add styles, content ([5927e9c](https://github.com/staccx/bento/commit/5927e9c))
* **wasteiq-web:** styling ([265387d](https://github.com/staccx/bento/commit/265387d))



## [8.1.1](https://github.com/staccx/bento/compare/v8.1.0...v8.1.1) (2018-10-30)


### Bug Fixes

* **bento:** removed all app.test.js ([34f0b4c](https://github.com/staccx/bento/commit/34f0b4c))
* **fundu-theme:** fix global styles ([60080ff](https://github.com/staccx/bento/commit/60080ff))



# [8.1.0](https://github.com/staccx/bento/compare/v8.0.0...v8.1.0) (2018-10-30)


### Bug Fixes

* **i18n:** fix config issues and bad test ([5ccb160](https://github.com/staccx/bento/commit/5ccb160))
* **i18n:** fixed issue with test input ([24142a3](https://github.com/staccx/bento/commit/24142a3))
* **i18n:** fixed tests ([a1ae94b](https://github.com/staccx/bento/commit/a1ae94b))


### Features

* **i18n:** extracted auto detect language. introduces middleware ([e0411e7](https://github.com/staccx/bento/commit/e0411e7))
* **wasteiq-web:** add styles ([26acd1f](https://github.com/staccx/bento/commit/26acd1f))
* **wasteiq-web:** add styles ([82fe56f](https://github.com/staccx/bento/commit/82fe56f))



# [8.0.0](https://github.com/staccx/bento/compare/v7.19.0...v8.0.0) (2018-10-29)


### Bug Fixes

* **stylguide:** builds ([551144a](https://github.com/staccx/bento/commit/551144a))



# [7.19.0](https://github.com/staccx/bento/compare/v8.0.0-alpha.1...v7.19.0) (2018-10-29)


### Bug Fixes

* **bento:** revert lerna version ([e44941c](https://github.com/staccx/bento/commit/e44941c))



# [8.0.0-alpha.1](https://github.com/staccx/bento/compare/v7.17.2...v8.0.0-alpha.1) (2018-10-29)


### Bug Fixes

* **base:** improve Image ([7acdaa7](https://github.com/staccx/bento/commit/7acdaa7))
* **stacc-website:** fix globals ([f0e6ed8](https://github.com/staccx/bento/commit/f0e6ed8))


### Features

* **fundu-theme:** add imagestyling variant to theme ([7032ae8](https://github.com/staccx/bento/commit/7032ae8))
* **fundu-theme:** add secondary button variant ([989a8a5](https://github.com/staccx/bento/commit/989a8a5))



## [7.17.2](https://github.com/staccx/bento/compare/v7.17.1...v7.17.2) (2018-10-26)


### Bug Fixes

* **open-id:** add prepublishOnly script ([e09f21a](https://github.com/staccx/bento/commit/e09f21a))



## [7.17.1](https://github.com/staccx/bento/compare/v7.17.0...v7.17.1) (2018-10-26)


### Bug Fixes

* **open-id:** fix login preventDefault ([ddc383f](https://github.com/staccx/bento/commit/ddc383f))


### Features

* **bank-in-a-box:** clean up components and how/where they are used ([06fd1ff](https://github.com/staccx/bento/commit/06fd1ff))



# [7.17.0](https://github.com/staccx/bento/compare/v7.16.0...v7.17.0) (2018-10-26)


### Bug Fixes

* **dealerpad:** fixed dealerpad for V8 ([9c9e7ce](https://github.com/staccx/bento/commit/9c9e7ce))


### Features

* **bank-in-a-box:** confirm-symbol themified ([4d271b4](https://github.com/staccx/bento/commit/4d271b4))
* **bank-in-a-box:** themify withdraw: remove styled components ([c9efad3](https://github.com/staccx/bento/commit/c9efad3))
* **base:** sunsetting `size="flush"` on `<Box>` ([9ae3b8a](https://github.com/staccx/bento/commit/9ae3b8a))
* **open-id:** add prop id to Login ([8576794](https://github.com/staccx/bento/commit/8576794))



# [7.16.0](https://github.com/staccx/bento/compare/v8.0.0-alpha.0...v7.16.0) (2018-10-25)


### Bug Fixes

* **aprila-theme:** remove extendDefault ([4c69899](https://github.com/staccx/bento/commit/4c69899))
* **base:** fix some components ([ad8770e](https://github.com/staccx/bento/commit/ad8770e))
* **base:** reset default. part of theming ([f2941e2](https://github.com/staccx/bento/commit/f2941e2))
* **base:** update paths to styles ([68c65ef](https://github.com/staccx/bento/commit/68c65ef))
* **developer-portal:** remove @staccx/theme ([ba7e0c1](https://github.com/staccx/bento/commit/ba7e0c1))
* **i18n:** fix translate with fallback for component ([bc0c6e3](https://github.com/staccx/bento/commit/bc0c6e3))
* **imove-theme:** adjust modal-content ([1a1054f](https://github.com/staccx/bento/commit/1a1054f))
* **imove-theme:** fix modal ([193a48f](https://github.com/staccx/bento/commit/193a48f))
* **loan-process:** remove theme ([202bea8](https://github.com/staccx/bento/commit/202bea8))
* **onboarding-pm:** remove staccx theme ([bdce2ab](https://github.com/staccx/bento/commit/bdce2ab))
* **open-id:** prevent default in submitId and submitCode ([355dbf8](https://github.com/staccx/bento/commit/355dbf8))
* **savings-advisor:** theming.fontSmoothing ([87bc730](https://github.com/staccx/bento/commit/87bc730))
* **savings-advisor:** wrap animation in css`` ([766de46](https://github.com/staccx/bento/commit/766de46))
* **stacc-theme:** fix resets ([0e97ff4](https://github.com/staccx/bento/commit/0e97ff4))
* **styleguide:** fix variants ([26bfb41](https://github.com/staccx/bento/commit/26bfb41))
* **styrke-theme:** remove @staccx/theme, replace with theming ([19d9dc9](https://github.com/staccx/bento/commit/19d9dc9))
* **wasteiq-web:** fix build stuff ([1173d79](https://github.com/staccx/bento/commit/1173d79))


### Features

* **bank-in-a-box:** autofill to-account now works ([cacb53c](https://github.com/staccx/bento/commit/cacb53c))
* **bank-in-a-box:** loan + savings is separated and started themingprep ([815d789](https://github.com/staccx/bento/commit/815d789))
* **base:** add WebFonts. use as GlobalStyle ([f2cc9e7](https://github.com/staccx/bento/commit/f2cc9e7))
* **fundu-theme:** styling for redesign ([4b9c92e](https://github.com/staccx/bento/commit/4b9c92e))
* **i18n:** add fallback. remove traces of @staccx/theme ([f123b88](https://github.com/staccx/bento/commit/f123b88))
* **imove-theme:** small button adjustment ([35dea00](https://github.com/staccx/bento/commit/35dea00))
* **plop:** change theme path ([f5cf3d9](https://github.com/staccx/bento/commit/f5cf3d9))
* **theme:** create wasteiq-theme ([248c87c](https://github.com/staccx/bento/commit/248c87c))
* **wasteiq-web:** add more content ([fbfd715](https://github.com/staccx/bento/commit/fbfd715))
* **wasteiq-web:** set up web with theme ([312a275](https://github.com/staccx/bento/commit/312a275))



# [8.0.0-alpha.0](https://github.com/staccx/bento/compare/v7.15.0...v8.0.0-alpha.0) (2018-10-23)


### Bug Fixes

* **bank-in-a-box:** fix some bugs on transactions ([63b9090](https://github.com/staccx/bento/commit/63b9090))
* **bank-in-a-box:** fix some bugs on transactions ([ad9802b](https://github.com/staccx/bento/commit/ad9802b))
* **base:** rename autocomplete to autoComplete ([d59c018](https://github.com/staccx/bento/commit/d59c018))
* **stacc-web:** fix block type image killing the page ([1772b4a](https://github.com/staccx/bento/commit/1772b4a))
* **stacc-web:** rename indifeces to indices ([a158a3e](https://github.com/staccx/bento/commit/a158a3e))
* **stacc-website:** fix team pages indices ([4fd128f](https://github.com/staccx/bento/commit/4fd128f))


### Features

* **base:** add support for containers in form ([ffa28bd](https://github.com/staccx/bento/commit/ffa28bd))
* **base:** export Form, Formfield ([44eafa1](https://github.com/staccx/bento/commit/44eafa1))
* **base:** logo-component support className ([22ea4f3](https://github.com/staccx/bento/commit/22ea4f3))
* **open-id:** add error handling and status ([e249b9a](https://github.com/staccx/bento/commit/e249b9a))
* **stacc-website:** add scale to deploy command ([64c96d8](https://github.com/staccx/bento/commit/64c96d8))
* **stacc-website:** add scale to deploy command ([3790627](https://github.com/staccx/bento/commit/3790627))



# [7.15.0](https://github.com/staccx/bento/compare/v7.14.0...v7.15.0) (2018-10-22)


### Bug Fixes

* **base:** rename autocomplete to autoComplete ([5821511](https://github.com/staccx/bento/commit/5821511))


### Features

* **open-id:** add error handling and status ([ac3306c](https://github.com/staccx/bento/commit/ac3306c))



# [7.14.0](https://github.com/staccx/bento/compare/v7.13.1...v7.14.0) (2018-10-22)


### Bug Fixes

* **stacc-web:** rename indifeces to indices ([5b0eb04](https://github.com/staccx/bento/commit/5b0eb04))
* **stacc-website:** fix team pages indices ([6b962cc](https://github.com/staccx/bento/commit/6b962cc))


### Features

* **base:** add support for containers in form ([d9093e4](https://github.com/staccx/bento/commit/d9093e4))
* **base:** export Form, Formfield ([5d44487](https://github.com/staccx/bento/commit/5d44487))
* **base:** logo-component support className ([a3b47ca](https://github.com/staccx/bento/commit/a3b47ca))



## [7.13.1](https://github.com/staccx/bento/compare/v7.13.0...v7.13.1) (2018-10-19)


### Bug Fixes

* **stacc-web:** fix block type image killing the page ([157f88d](https://github.com/staccx/bento/commit/157f88d))



# [7.13.0](https://github.com/staccx/bento/compare/v7.12.0...v7.13.0) (2018-10-18)


### Bug Fixes

* **base:** zero state set if values are set ([85c6ab4](https://github.com/staccx/bento/commit/85c6ab4))
* **formatting:** fix year and day unicodetokens ([ad88f64](https://github.com/staccx/bento/commit/ad88f64))
* **loan-process:** change sign button to a ([0558807](https://github.com/staccx/bento/commit/0558807))


### Features

* **bank-in-a-box:** upgrade bbiab to sc4 ([206ee17](https://github.com/staccx/bento/commit/206ee17))
* **base:** add FeatureToggle component ([ec1bfff](https://github.com/staccx/bento/commit/ec1bfff))
* **base:** layout grid="form" now works as originally intended ([8c64ced](https://github.com/staccx/bento/commit/8c64ced))
* **base:** upgraded styled-components to v4 ([a4e0c06](https://github.com/staccx/bento/commit/a4e0c06))
* **bento:** update themePropTyoes ([7ae339e](https://github.com/staccx/bento/commit/7ae339e))
* **imove-theme:** add helpicon ([7d3b30e](https://github.com/staccx/bento/commit/7d3b30e))
* **imove-theme:** adjust styles ([758f2e6](https://github.com/staccx/bento/commit/758f2e6))
* **imove-theme:** correct styling secondary button ([acb6b5f](https://github.com/staccx/bento/commit/acb6b5f))
* **imove-theme:** improve focus ([a1207ca](https://github.com/staccx/bento/commit/a1207ca))
* **imove-theme:** new secondary-button ([b45a61e](https://github.com/staccx/bento/commit/b45a61e))
* **imove-theme:** removed hover-effect on logo ([de96685](https://github.com/staccx/bento/commit/de96685))
* **imove-web:** add font size small to theme ([36085d3](https://github.com/staccx/bento/commit/36085d3))



# [7.12.0](https://github.com/staccx/bento/compare/v7.11.0...v7.12.0) (2018-10-12)


### Features

* **base:** add Wait ([83c717e](https://github.com/staccx/bento/commit/83c717e))
* **imove-theme:** improve focus, hover states ([b0e5ca3](https://github.com/staccx/bento/commit/b0e5ca3))
* **imove-theme:** lighten main enu ([97f4586](https://github.com/staccx/bento/commit/97f4586))
* **imove-web:** add font size small ([bb81edd](https://github.com/staccx/bento/commit/bb81edd))
* **open-id:** add callback to fetch and handle renewing ([94a4299](https://github.com/staccx/bento/commit/94a4299))



# [7.11.0](https://github.com/staccx/bento/compare/v7.10.0...v7.11.0) (2018-10-11)


### Features

* **imove-theme:** adjust radiopill theming ([5c26ad3](https://github.com/staccx/bento/commit/5c26ad3))



# [7.10.0](https://github.com/staccx/bento/compare/v7.9.0...v7.10.0) (2018-10-11)


### Bug Fixes

* **sanity-plugin-i18n:** fix build ([deb7ad8](https://github.com/staccx/bento/commit/deb7ad8))


### Features

* **base:** add search can now take new props ([260af98](https://github.com/staccx/bento/commit/260af98))
* **imove-theme:** improve Buttons, Box ([380ea90](https://github.com/staccx/bento/commit/380ea90))
* **open-id:** add hoc ([64638ca](https://github.com/staccx/bento/commit/64638ca))
* **stacc-web:** add scaling to now config ([dd8fce1](https://github.com/staccx/bento/commit/dd8fce1))



# [7.9.0](https://github.com/staccx/bento/compare/v7.8.1...v7.9.0) (2018-10-09)


### Bug Fixes

* **base:** explicitely exporting BaseTheme in the interim ([f243552](https://github.com/staccx/bento/commit/f243552))
* **imove-app:** add ids etc ([35cf9d3](https://github.com/staccx/bento/commit/35cf9d3))
* **imove-app:** cleaning ([f57ebc5](https://github.com/staccx/bento/commit/f57ebc5))
* **imove-web:** fix broken image links ([fc36a09](https://github.com/staccx/bento/commit/fc36a09))
* **stacc-website:** fix client case study not rendering ([be9033c](https://github.com/staccx/bento/commit/be9033c))


### Features

* **bank-in-a-box:** added GlobalStyles ([d18812b](https://github.com/staccx/bento/commit/d18812b))
* **bank-in-a-box:** upgraded styled-components ([75f6d28](https://github.com/staccx/bento/commit/75f6d28))
* **base:** add A component ([39b4e3b](https://github.com/staccx/bento/commit/39b4e3b))
* **base:** added Global style. fixed base ([6a5c7ef](https://github.com/staccx/bento/commit/6a5c7ef))
* **base:** export ThemeComponent ([0222eda](https://github.com/staccx/bento/commit/0222eda))
* **base:** upgraded styled-components ([6695c4c](https://github.com/staccx/bento/commit/6695c4c))
* **bento:** upgraded to styled-components@beta4 ([9ae5526](https://github.com/staccx/bento/commit/9ae5526))
* **imove:** general responsivity ([fface44](https://github.com/staccx/bento/commit/fface44))
* **imove-app:** add functionality for handling more than one person ([369bb83](https://github.com/staccx/bento/commit/369bb83))
* **imove-app:** add i18n ([f72eda4](https://github.com/staccx/bento/commit/f72eda4))
* **imove-app:** add i18n ([7b92197](https://github.com/staccx/bento/commit/7b92197))
* **imove-app:** add moar 🎉🎊 ([3682423](https://github.com/staccx/bento/commit/3682423))
* **imove-app:** add OrderAdditional page ([4cc0106](https://github.com/staccx/bento/commit/4cc0106))
* **imove-app:** added Wrapper to all pages again ([4fbbecb](https://github.com/staccx/bento/commit/4fbbecb))
* **imove-app:** i18n implemented ([46d51e2](https://github.com/staccx/bento/commit/46d51e2))
* **imove-app:** menu now responsive ([d9ff6aa](https://github.com/staccx/bento/commit/d9ff6aa))
* **imove-app:** remove Wrapper ([887c60a](https://github.com/staccx/bento/commit/887c60a))
* **imove-app:** wip TranslatedText ([29613be](https://github.com/staccx/bento/commit/29613be))
* **imove-theme:** add styles for CheckBox variant iconBox ([a45b76f](https://github.com/staccx/bento/commit/a45b76f))
* **imove-web:** add chrome devtools responsive widths to theme ([d1be409](https://github.com/staccx/bento/commit/d1be409))
* **imove-web:** add data from sanity ([5f5e78f](https://github.com/staccx/bento/commit/5f5e78f))
* **imove-web:** add media templates with styleUtils.js ([036e251](https://github.com/staccx/bento/commit/036e251))
* **imove-web:** add more responsivity ([049a0a3](https://github.com/staccx/bento/commit/049a0a3))
* **imove-web:** add responsivity to sections ([6da19f3](https://github.com/staccx/bento/commit/6da19f3))
* **imove-web:** hero responsivity ([c3c8d8e](https://github.com/staccx/bento/commit/c3c8d8e))
* **imove-web:** start responsivity [wip] ([b161ffd](https://github.com/staccx/bento/commit/b161ffd))
* **imove-web:** style FAQ and footer ([b7b6718](https://github.com/staccx/bento/commit/b7b6718))
* **imove-web:** styled footer ([fd91430](https://github.com/staccx/bento/commit/fd91430))
* **open-id:** add signInRedirectCallback when logged in ([b838688](https://github.com/staccx/bento/commit/b838688))
* **sanity-plugin-i18n:** add sanity plugin for i18n ([bd301b7](https://github.com/staccx/bento/commit/bd301b7))



## [7.8.1](https://github.com/staccx/bento/compare/v7.8.0...v7.8.1) (2018-10-05)


### Bug Fixes

* **imove-app:** add missing dependency ([6bf7de3](https://github.com/staccx/bento/commit/6bf7de3))
* **imove-web:** remove non-existing theme-props ([062ca88](https://github.com/staccx/bento/commit/062ca88))
* **imove-web:** remove unused import ([8a48e77](https://github.com/staccx/bento/commit/8a48e77))
* **imove-web:** update routes ([a6ba969](https://github.com/staccx/bento/commit/a6ba969))
* **loan-process:** minor adjustments ([edab00d](https://github.com/staccx/bento/commit/edab00d))


### Features

* **base:** add theming into base ([950970a](https://github.com/staccx/bento/commit/950970a))
* **base:** fetch will postpone poll until prev is back ([c64ba06](https://github.com/staccx/bento/commit/c64ba06))
* **base:** remove all references to @staccx/theme ([80080d4](https://github.com/staccx/bento/commit/80080d4))
* **base:** theme.add can now also take an array ([8e329ab](https://github.com/staccx/bento/commit/8e329ab))
* **imove-app:** add unstyled 404 ([b3214d3](https://github.com/staccx/bento/commit/b3214d3))
* **imove-app:** some route-adjustments ([7b1e8b5](https://github.com/staccx/bento/commit/7b1e8b5))
* **imove-web:** add css to header/nav ([70d9a5b](https://github.com/staccx/bento/commit/70d9a5b))
* **imove-web:** add new props to Logo in theme ([5473a98](https://github.com/staccx/bento/commit/5473a98))
* **imove-web:** add onboarding-link to hero ([b7f1f30](https://github.com/staccx/bento/commit/b7f1f30))
* **imove-web:** add spacing to top of hero ([d275fc1](https://github.com/staccx/bento/commit/d275fc1))
* **imove-web:** add svg Logo component ([84ec4ce](https://github.com/staccx/bento/commit/84ec4ce))
* **imove-web:** improve back navigation ([ade5262](https://github.com/staccx/bento/commit/ade5262))
* **imove-web:** menu underline on hover ([955e720](https://github.com/staccx/bento/commit/955e720))
* **imove-web:** switch Logo comp. with ThemeComponent ([d126c99](https://github.com/staccx/bento/commit/d126c99))
* **stacc-website:** return error code 404 on unknown pages ([284cb5b](https://github.com/staccx/bento/commit/284cb5b))



# [7.8.0](https://github.com/staccx/bento/compare/v7.7.4...v7.8.0) (2018-10-04)


### Bug Fixes

* **base:** make slider themable ([33e3e12](https://github.com/staccx/bento/commit/33e3e12))
* **base:** revert button to funcponent ([ccb1437](https://github.com/staccx/bento/commit/ccb1437))
* **bento:** fix readme numbering ([1b407f5](https://github.com/staccx/bento/commit/1b407f5))
* **bento:** update readme ([30e6136](https://github.com/staccx/bento/commit/30e6136))
* **bento:** update readme ([29a5c52](https://github.com/staccx/bento/commit/29a5c52))
* **companywebsitetemplate:** fix broken build ([8200bb7](https://github.com/staccx/bento/commit/8200bb7))
* **developer-portal:** determine oidc authority from hostname ([82739c9](https://github.com/staccx/bento/commit/82739c9))
* **i18n:** fix for null possibility ([7472578](https://github.com/staccx/bento/commit/7472578))
* **imove:** spelling ([911bcf7](https://github.com/staccx/bento/commit/911bcf7))
* **imove-app:** fix build ([1439de3](https://github.com/staccx/bento/commit/1439de3))
* **imove-app:** fix current always true on "/" ([a35cf8d](https://github.com/staccx/bento/commit/a35cf8d))
* **imove-app:** fix dependencies ([adc80ac](https://github.com/staccx/bento/commit/adc80ac))
* **imove-app:** fix exports ([5a70aa7](https://github.com/staccx/bento/commit/5a70aa7))
* **imove-app:** remove warnings ([e8b5299](https://github.com/staccx/bento/commit/e8b5299))
* **loan-process:** minor adjustments ([663a2ab](https://github.com/staccx/bento/commit/663a2ab))
* **property-value:** add isLoading flag ([dfa909a](https://github.com/staccx/bento/commit/dfa909a))
* **property-value:** fixed issue with api key and base imcomp ([0da6fb2](https://github.com/staccx/bento/commit/0da6fb2))
* **savings-advisor:** add missing dependency ([a52e1a1](https://github.com/staccx/bento/commit/a52e1a1))
* **soy:** ignore node_modules properly ([65022a0](https://github.com/staccx/bento/commit/65022a0))
* **stacc-website:** add @sanity/client to dependencies ([42a3a4e](https://github.com/staccx/bento/commit/42a3a4e))
* **stacc-website:** add hack to scroll to top on window pop state ([248b2f6](https://github.com/staccx/bento/commit/248b2f6))
* **stacc-website:** add keys ([8e978b9](https://github.com/staccx/bento/commit/8e978b9))
* **stacc-website:** add Label to search ([ea515f9](https://github.com/staccx/bento/commit/ea515f9))
* **stacc-website:** add meta for subpages ([ebf516a](https://github.com/staccx/bento/commit/ebf516a))
* **stacc-website:** add redirects to routes ([6326b3a](https://github.com/staccx/bento/commit/6326b3a))
* **stacc-website:** add s3 links to S3. remove creation on build ([bd51946](https://github.com/staccx/bento/commit/bd51946))
* **stacc-website:** add stacc.com domain to alias list ([3fcdc52](https://github.com/staccx/bento/commit/3fcdc52))
* **stacc-website:** add typeform for footer ([85677c8](https://github.com/staccx/bento/commit/85677c8))
* **stacc-website:** change redirect to 301 ([e478ad7](https://github.com/staccx/bento/commit/e478ad7))
* **stacc-website:** contentlinks now only fetches what it needs ([157f50c](https://github.com/staccx/bento/commit/157f50c))
* **stacc-website:** fix 404 for subpages ([bc02f56](https://github.com/staccx/bento/commit/bc02f56))
* **stacc-website:** fix issue with Edge menu not being clicked ([86f2697](https://github.com/staccx/bento/commit/86f2697))
* **stacc-website:** fix redirects ([1a9d202](https://github.com/staccx/bento/commit/1a9d202))
* **stacc-website:** fix style for contact btn in footer ([3306710](https://github.com/staccx/bento/commit/3306710))
* **stacc-website:** fix syntax error ([c44fe5f](https://github.com/staccx/bento/commit/c44fe5f))
* **stacc-website:** fix vcard generation for special characters ([a607f98](https://github.com/staccx/bento/commit/a607f98))
* **stacc-website:** fix vcard url and removed service worker ([c2efda4](https://github.com/staccx/bento/commit/c2efda4))
* **stacc-website:** fix with navigation. still scrolls to top ([39b0b0b](https://github.com/staccx/bento/commit/39b0b0b))
* **stacc-website:** hide scrollbar ([0b55a95](https://github.com/staccx/bento/commit/0b55a95))
* **stacc-website:** housekeeping ([7109233](https://github.com/staccx/bento/commit/7109233))
* **stacc-website:** housekeeping ([c48ad3b](https://github.com/staccx/bento/commit/c48ad3b))
* **stacc-website:** improve a11y ([711fd5b](https://github.com/staccx/bento/commit/711fd5b))
* **stacc-website:** improve contacus iamge-handling ([0edcfec](https://github.com/staccx/bento/commit/0edcfec))
* **stacc-website:** improved and uploaded rest of vcards ([4a7434b](https://github.com/staccx/bento/commit/4a7434b))
* **stacc-website:** invert header on 404 ([5d88a72](https://github.com/staccx/bento/commit/5d88a72))
* **stacc-website:** people now use alias if available ([0e8eaa6](https://github.com/staccx/bento/commit/0e8eaa6))
* **stacc-website:** phone number now supports country code ([f836f90](https://github.com/staccx/bento/commit/f836f90))
* **stacc-website:** remove client redirects. add config to files ([01bb8a7](https://github.com/staccx/bento/commit/01bb8a7))
* **stacc-website:** remove console.log ([f6734dd](https://github.com/staccx/bento/commit/f6734dd))
* **stacc-website:** remove div wrapping subpages ([acc3e4f](https://github.com/staccx/bento/commit/acc3e4f))
* **stacc-website:** remove mobx, fixes ie11 ([e061502](https://github.com/staccx/bento/commit/e061502))
* **stacc-website:** remove negative margin if not first-child ([f4e3c85](https://github.com/staccx/bento/commit/f4e3c85))
* **stacc-website:** remove pointer events from arrow ([eaac214](https://github.com/staccx/bento/commit/eaac214))
* **stacc-website:** submenuitem will now also close menu on mobile ([09eeafc](https://github.com/staccx/bento/commit/09eeafc))


### Features

* **bank-in-a-box:** added start for the downpayment-page ([6f8d0be](https://github.com/staccx/bento/commit/6f8d0be))
* **base:** add State ([8447e64](https://github.com/staccx/bento/commit/8447e64))
* **base:** fetch will postpone poll until prev is back ([5f7488b](https://github.com/staccx/bento/commit/5f7488b))
* **bento:** improved plop App ([f4edb29](https://github.com/staccx/bento/commit/f4edb29))
* **company-website-template:** add campaignpages ([04ce4cc](https://github.com/staccx/bento/commit/04ce4cc))
* **company-website-template:** add email subject ([76fece7](https://github.com/staccx/bento/commit/76fece7))
* **company-website-template:** add image and file explorer to structure ([2ccc13b](https://github.com/staccx/bento/commit/2ccc13b))
* **company-website-template:** add logosalad block ([af00387](https://github.com/staccx/bento/commit/af00387))
* **company-website-template:** add pageTitle to pages ([a79daf8](https://github.com/staccx/bento/commit/a79daf8))
* **company-website-template:** add Structure ([3758192](https://github.com/staccx/bento/commit/3758192))
* **company-website-template:** slug is now required ([fe51a79](https://github.com/staccx/bento/commit/fe51a79))
* **control:** add actions ([8bc5e25](https://github.com/staccx/bento/commit/8bc5e25))
* **control:** add build ([e9493ad](https://github.com/staccx/bento/commit/e9493ad))
* **control:** add button to serve and to reset projec ([98267ce](https://github.com/staccx/bento/commit/98267ce))
* **control:** add deps to package ([a52e288](https://github.com/staccx/bento/commit/a52e288))
* **control:** add styleguide render ([c3ad946](https://github.com/staccx/bento/commit/c3ad946))
* **control:** add terminal. output piped through ([1540b71](https://github.com/staccx/bento/commit/1540b71))
* **control:** add tool for resetting project ([6563d98](https://github.com/staccx/bento/commit/6563d98))
* **control:** any script in any package can now be run ([6a203c9](https://github.com/staccx/bento/commit/6a203c9))
* **control:** better run scripts ([667bc0e](https://github.com/staccx/bento/commit/667bc0e))
* **control:** terminal now self sufficient ([98f19ae](https://github.com/staccx/bento/commit/98f19ae))
* **i18n:** add functions for converting and getting value ([3d77352](https://github.com/staccx/bento/commit/3d77352))
* **imove:** add {heading} to features component ([d486fb6](https://github.com/staccx/bento/commit/d486fb6))
* **imove:** add advantages + feed data ([7c9c40a](https://github.com/staccx/bento/commit/7c9c40a))
* **imove:** add brand and icon imgs ([e43d72b](https://github.com/staccx/bento/commit/e43d72b))
* **imove:** add car images ([68e4a01](https://github.com/staccx/bento/commit/68e4a01))
* **imove:** add style to pricing ([bafe933](https://github.com/staccx/bento/commit/bafe933))
* **imove:** feed data from js-file ([89322ef](https://github.com/staccx/bento/commit/89322ef))
* **imove:** recode and change features components ([3a465a8](https://github.com/staccx/bento/commit/3a465a8))
* **imove:** recode and change pricing component ([6ea98aa](https://github.com/staccx/bento/commit/6ea98aa))
* **imove:** remove advantages component ([febe2d4](https://github.com/staccx/bento/commit/febe2d4))
* **imove:** rewrite Hero data + conditionals ([474030d](https://github.com/staccx/bento/commit/474030d))
* **imove:** style hero green blob ([28a8525](https://github.com/staccx/bento/commit/28a8525))
* **imove:** styling ([9e050b5](https://github.com/staccx/bento/commit/9e050b5))
* **imove:** update filenames in data source ([a3df6be](https://github.com/staccx/bento/commit/a3df6be))
* **imove:** update text on landingpage ([c928031](https://github.com/staccx/bento/commit/c928031))
* **imove:** update the theme ([9667b8c](https://github.com/staccx/bento/commit/9667b8c))
* **imove-app:** add carousel ([b0c86e8](https://github.com/staccx/bento/commit/b0c86e8))
* **imove-app:** add functioning text-search for cars ([b5ba5fd](https://github.com/staccx/bento/commit/b5ba5fd))
* **imove-app:** add list of detail to cardetails ([5447fa0](https://github.com/staccx/bento/commit/5447fa0))
* **imove-app:** add more images ([6239871](https://github.com/staccx/bento/commit/6239871))
* **imove-app:** add more styles ([ce1a6cb](https://github.com/staccx/bento/commit/ce1a6cb))
* **imove-app:** add pages for order process ([4ecba0e](https://github.com/staccx/bento/commit/4ecba0e))
* **imove-app:** add placeholder for cars-list ([34f14fa](https://github.com/staccx/bento/commit/34f14fa))
* **imove-app:** add styles to cars pages ([47d883a](https://github.com/staccx/bento/commit/47d883a))
* **imove-app:** added «slett abonnement» ([a3d8040](https://github.com/staccx/bento/commit/a3d8040))
* **imove-app:** added Login ([62200e7](https://github.com/staccx/bento/commit/62200e7))
* **imove-app:** added more routes and my-car + profile-page ([5855db9](https://github.com/staccx/bento/commit/5855db9))
* **imove-app:** added profileEdit ([8d6296d](https://github.com/staccx/bento/commit/8d6296d))
* **imove-app:** added react router + sell-step ([f00afa4](https://github.com/staccx/bento/commit/f00afa4))
* **imove-app:** added sell-step + confirmation ([24faeb2](https://github.com/staccx/bento/commit/24faeb2))
* **imove-app:** added start for onboarding without styling ([9a19952](https://github.com/staccx/bento/commit/9a19952))
* **imove-app:** added todo for text that needs to be replaced later on ([c763f9d](https://github.com/staccx/bento/commit/c763f9d))
* **imove-app:** added waiting-list ([0cb23e6](https://github.com/staccx/bento/commit/0cb23e6))
* **imove-app:** change texts ([9fa2887](https://github.com/staccx/bento/commit/9fa2887))
* **imove-app:** improve carousel styles ([a5da8f4](https://github.com/staccx/bento/commit/a5da8f4))
* **imove-app:** init ([3adc5f4](https://github.com/staccx/bento/commit/3adc5f4))
* **imove-app:** make menu fixed ([1d746e7](https://github.com/staccx/bento/commit/1d746e7))
* **imove-app:** onboarding a bit more polished ([7fbd516](https://github.com/staccx/bento/commit/7fbd516))
* **imove-app:** onboarding styled ([3721764](https://github.com/staccx/bento/commit/3721764))
* **imove-app:** profile-edit gets content from profile-object ([7f75a13](https://github.com/staccx/bento/commit/7f75a13))
* **imove-app:** removed withRouter ([270fb19](https://github.com/staccx/bento/commit/270fb19))
* **imove-app:** styled menu ([eeabaf2](https://github.com/staccx/bento/commit/eeabaf2))
* **imove-theme:** added own styled radiopill for imove ([17366f5](https://github.com/staccx/bento/commit/17366f5))
* **imove-theme:** init ([7cf754d](https://github.com/staccx/bento/commit/7cf754d))
* **imove-web:** add _key properties to advantages ([cb80ad6](https://github.com/staccx/bento/commit/cb80ad6))
* **imove-web:** add a couple of sizes to theme ([fd94585](https://github.com/staccx/bento/commit/fd94585))
* **imove-web:** add and populate footer ([87ef64c](https://github.com/staccx/bento/commit/87ef64c))
* **imove-web:** add comparison component ([1386ac9](https://github.com/staccx/bento/commit/1386ac9))
* **imove-web:** add comparison table data ([a562ece](https://github.com/staccx/bento/commit/a562ece))
* **imove-web:** add comparison table html and data ([3f5cb23](https://github.com/staccx/bento/commit/3f5cb23))
* **imove-web:** add data for FAQ ([434d313](https://github.com/staccx/bento/commit/434d313))
* **imove-web:** add data from figma ([f37ac80](https://github.com/staccx/bento/commit/f37ac80))
* **imove-web:** add ExtraCars to header ([ed583cc](https://github.com/staccx/bento/commit/ed583cc))
* **imove-web:** add FAQ component ([e5849c2](https://github.com/staccx/bento/commit/e5849c2))
* **imove-web:** add font size to theme ([45b4539](https://github.com/staccx/bento/commit/45b4539))
* **imove-web:** add graphics ([ce54ad6](https://github.com/staccx/bento/commit/ce54ad6))
* **imove-web:** add graphics ([677e710](https://github.com/staccx/bento/commit/677e710))
* **imove-web:** add header/nav semantics ([57f21e8](https://github.com/staccx/bento/commit/57f21e8))
* **imove-web:** add Hverdagsbil component ([c9b4198](https://github.com/staccx/bento/commit/c9b4198))
* **imove-web:** add key prop to Footer comp ([9906828](https://github.com/staccx/bento/commit/9906828))
* **imove-web:** add key-prop to PricingCard ([9c9f8f8](https://github.com/staccx/bento/commit/9c9f8f8))
* **imove-web:** add Layout component to Features & Pricing ([50c23c0](https://github.com/staccx/bento/commit/50c23c0))
* **imove-web:** add pilotInfo section as a CallToAction comp ([393c783](https://github.com/staccx/bento/commit/393c783))
* **imove-web:** add propTypes to PricingCard ([53b1b94](https://github.com/staccx/bento/commit/53b1b94))
* **imove-web:** add typekit font sofia pro ([e5396d8](https://github.com/staccx/bento/commit/e5396d8))
* **imove-web:** add weight 700 to body font ([b1fedec](https://github.com/staccx/bento/commit/b1fedec))
* **imove-web:** add/modify extraCars feed data ([823ef90](https://github.com/staccx/bento/commit/823ef90))
* **imove-web:** add/replace + restructure data for header ([4d567ba](https://github.com/staccx/bento/commit/4d567ba))
* **imove-web:** better price blob styling ([a17cac5](https://github.com/staccx/bento/commit/a17cac5))
* **imove-web:** better syled price headings ([b4101d1](https://github.com/staccx/bento/commit/b4101d1))
* **imove-web:** change ul -> Row in Footer ([73766ab](https://github.com/staccx/bento/commit/73766ab))
* **imove-web:** cleanup redundant code ([51b06f2](https://github.com/staccx/bento/commit/51b06f2))
* **imove-web:** data-feed cleanup ([279915f](https://github.com/staccx/bento/commit/279915f))
* **imove-web:** defaultProps + propTypes-cleanup ([d870823](https://github.com/staccx/bento/commit/d870823))
* **imove-web:** hero structure + styling ([9a11bf6](https://github.com/staccx/bento/commit/9a11bf6))
* **imove-web:** increase features wrapper ([004d38b](https://github.com/staccx/bento/commit/004d38b))
* **imove-web:** make components PricingCard and PriceBlob ([a201e7b](https://github.com/staccx/bento/commit/a201e7b))
* **imove-web:** modify LinkButton component ([8abf0f8](https://github.com/staccx/bento/commit/8abf0f8))
* **imove-web:** more data-feed cleanup ([05d6220](https://github.com/staccx/bento/commit/05d6220))
* **imove-web:** more hero restructuring ([defe99e](https://github.com/staccx/bento/commit/defe99e))
* **imove-web:** prepare new advantages components ([622d144](https://github.com/staccx/bento/commit/622d144))
* **imove-web:** refurbish SectionHeading comp ([9c4eeb4](https://github.com/staccx/bento/commit/9c4eeb4))
* **imove-web:** remove redundant imports ([14043e2](https://github.com/staccx/bento/commit/14043e2))
* **imove-web:** remove redundant imports in Home ([0366585](https://github.com/staccx/bento/commit/0366585))
* **imove-web:** remove unused theme object from import ([a0f989b](https://github.com/staccx/bento/commit/a0f989b))
* **imove-web:** rewrite hero data and structure ([fb3131f](https://github.com/staccx/bento/commit/fb3131f))
* **imove-web:** splitted sections in hero for styling ([d65e15f](https://github.com/staccx/bento/commit/d65e15f))
* **imove-web:** switch primary and secondary heading variant ([b189c9d](https://github.com/staccx/bento/commit/b189c9d))
* **imove-web:** update data feed ([2836dbb](https://github.com/staccx/bento/commit/2836dbb))
* **imove-web:** update FAQ style ([7287eac](https://github.com/staccx/bento/commit/7287eac))
* **imove-web:** use css grid for CarProperties ([8bddeba](https://github.com/staccx/bento/commit/8bddeba))
* **imove-web:** use css grid for Features component ([94a036e](https://github.com/staccx/bento/commit/94a036e))
* **imove-web:** use SectionHeading component for section headings ([c155348](https://github.com/staccx/bento/commit/c155348))
* **open-id:** user will no longer be sent if expired ([fc86fc5](https://github.com/staccx/bento/commit/fc86fc5))
* **soy:** discover versions of unmanaged dependencies packages ([46c274c](https://github.com/staccx/bento/commit/46c274c))
* **soy:** remove unused dependencies ([dc58a48](https://github.com/staccx/bento/commit/dc58a48))
* **soy:** update dependency version across packages ([94d06ab](https://github.com/staccx/bento/commit/94d06ab))
* **stacc-theme:** adjust colors ([19b2584](https://github.com/staccx/bento/commit/19b2584))
* **stacc-website:** add 404 page ([16be847](https://github.com/staccx/bento/commit/16be847))
* **stacc-website:** add aliasing redirects ([ecd1a19](https://github.com/staccx/bento/commit/ecd1a19))
* **stacc-website:** add basic scroll to top ([76811fc](https://github.com/staccx/bento/commit/76811fc))
* **stacc-website:** add GTM ([0868062](https://github.com/staccx/bento/commit/0868062))
* **stacc-website:** add ImageFullWidth block ([5ec08a1](https://github.com/staccx/bento/commit/5ec08a1))
* **stacc-website:** add outbound links to company ([3185f8e](https://github.com/staccx/bento/commit/3185f8e))
* **stacc-website:** add redirects ([1fd421e](https://github.com/staccx/bento/commit/1fd421e))
* **stacc-website:** add redirects ([13b5110](https://github.com/staccx/bento/commit/13b5110))
* **stacc-website:** add support for logoSalad. Fix main height ([5f7da06](https://github.com/staccx/bento/commit/5f7da06))
* **stacc-website:** add support for Stories Heading ([6478189](https://github.com/staccx/bento/commit/6478189))
* **stacc-website:** add support for typeform ([704a32c](https://github.com/staccx/bento/commit/704a32c))
* **stacc-website:** add tel and mailto ([394e6df](https://github.com/staccx/bento/commit/394e6df))
* **stacc-website:** add title to ImageFullwidth, needs more work ([299f1e9](https://github.com/staccx/bento/commit/299f1e9))
* **stacc-website:** add vCards ([aae15ca](https://github.com/staccx/bento/commit/aae15ca))
* **stacc-website:** adjust Hero ([2fbe597](https://github.com/staccx/bento/commit/2fbe597))
* **stacc-website:** adjust whitespace ([6a6c772](https://github.com/staccx/bento/commit/6a6c772))
* **stacc-website:** adjust Wrapper ([dea6026](https://github.com/staccx/bento/commit/dea6026))
* **stacc-website:** campaign pages will not render header ([68da56e](https://github.com/staccx/bento/commit/68da56e))
* **stacc-website:** clean routing. now serves 404 on unknown ([576ea00](https://github.com/staccx/bento/commit/576ea00))
* **stacc-website:** contact now always popup ([f54195f](https://github.com/staccx/bento/commit/f54195f))
* **stacc-website:** express server ([3862585](https://github.com/staccx/bento/commit/3862585))
* **stacc-website:** fix vcard script. add icons ([de09e7d](https://github.com/staccx/bento/commit/de09e7d))
* **stacc-website:** if you cant make it red, make it bigger ([d14cc78](https://github.com/staccx/bento/commit/d14cc78))
* **stacc-website:** implement [@eivindk](https://github.com/eivindk)’s adjustments ([a3c102a](https://github.com/staccx/bento/commit/a3c102a))
* **stacc-website:** improve a11y ([43646bb](https://github.com/staccx/bento/commit/43646bb))
* **stacc-website:** improve a11y ([9759c8a](https://github.com/staccx/bento/commit/9759c8a))
* **stacc-website:** improve design of contactus content ([fe8e931](https://github.com/staccx/bento/commit/fe8e931))
* **stacc-website:** improve handling of stories without images ([6605c93](https://github.com/staccx/bento/commit/6605c93))
* **stacc-website:** improve person layout ([64a892f](https://github.com/staccx/bento/commit/64a892f))
* **stacc-website:** improve typeform ([ea4842e](https://github.com/staccx/bento/commit/ea4842e))
* **stacc-website:** make now non-public ([93ed790](https://github.com/staccx/bento/commit/93ed790))
* **stacc-website:** menu will now hide on click outside ([ead50ee](https://github.com/staccx/bento/commit/ead50ee))
* **stacc-website:** remove shadow and company-name ([a5c6e64](https://github.com/staccx/bento/commit/a5c6e64))
* **stacc-website:** remove unneccessarry whitespace ([8e3193d](https://github.com/staccx/bento/commit/8e3193d))
* **stacc-website:** responsive hero lede ([1c9a8f0](https://github.com/staccx/bento/commit/1c9a8f0))
* **stacc-website:** simplify featurelist layout ([2cea336](https://github.com/staccx/bento/commit/2cea336))
* **stacc-website:** tweak typography ([5c2841f](https://github.com/staccx/bento/commit/5c2841f))
* **stacc-website:** tweak whitespace, remove unused pages ([3b4cc72](https://github.com/staccx/bento/commit/3b4cc72))
* **stacc-website:** use pageTitle as title if available ([c809890](https://github.com/staccx/bento/commit/c809890))
* **styleguide:** log files parsed by react-docgen ([55004ef](https://github.com/staccx/bento/commit/55004ef))
* **utils:** add function distinct and flatten ([de4c4e0](https://github.com/staccx/bento/commit/de4c4e0))



## [7.7.4](https://github.com/staccx/bento/compare/v7.7.3...v7.7.4) (2018-09-19)


### Bug Fixes

* **bento:** publish in release script ([61170c3](https://github.com/staccx/bento/commit/61170c3))



## [7.7.3](https://github.com/staccx/bento/compare/v7.7.2...v7.7.3) (2018-09-19)


### Bug Fixes

* **base:** fix polling not stopping ([8167dd6](https://github.com/staccx/bento/commit/8167dd6))
* **bento:** add styled-components as workspace dependency ([b42e9ea](https://github.com/staccx/bento/commit/b42e9ea))
* **company-website-template:** add servicepage. add title ([c5a62d4](https://github.com/staccx/bento/commit/c5a62d4))
* **login-oidc:** fix props ([e1a79bb](https://github.com/staccx/bento/commit/e1a79bb))
* **rollup-config:** remove console.log ([627ea8b](https://github.com/staccx/bento/commit/627ea8b))
* **soy:** apply dependency filter also to depcheck ([ba519e1](https://github.com/staccx/bento/commit/ba519e1))
* **stacc-website:** add title as data for heading ([f28bce4](https://github.com/staccx/bento/commit/f28bce4))
* **stacc-website:** fix submenu showing name ([1425b44](https://github.com/staccx/bento/commit/1425b44))


### Features

* **company-website-template:** add hide to client ([38409b9](https://github.com/staccx/bento/commit/38409b9))
* **control:** add new project ([a807710](https://github.com/staccx/bento/commit/a807710))
* **eslint-config:** add localStorage to accepted globals ([2b5aa31](https://github.com/staccx/bento/commit/2b5aa31))
* **i18n:** add detection of language and state saving ([77dda09](https://github.com/staccx/bento/commit/77dda09))
* **i18n:** add formatting ([345077d](https://github.com/staccx/bento/commit/345077d))
* **i18n:** add plugins to export. refactor formatter ([8e5137d](https://github.com/staccx/bento/commit/8e5137d))
* **i18n:** add support for plugins ([fe7cbcf](https://github.com/staccx/bento/commit/fe7cbcf))
* **i18n:** improved language. add singleton instance ([920e96d](https://github.com/staccx/bento/commit/920e96d))
* **soy:** add option to filter dependencies by name ([7fd8475](https://github.com/staccx/bento/commit/7fd8475))
* **soy:** add option to filter packages ([7500fda](https://github.com/staccx/bento/commit/7500fda))
* **soy:** add option to find dependencies ([ba7ece9](https://github.com/staccx/bento/commit/ba7ece9))
* **soy:** allow regex patterns in filters ([1a9b963](https://github.com/staccx/bento/commit/1a9b963))
* **soy:** check version intersection ([e798649](https://github.com/staccx/bento/commit/e798649))
* **soy:** dependency check ([726f51a](https://github.com/staccx/bento/commit/726f51a))
* **soy:** remove dependencies ([360ac93](https://github.com/staccx/bento/commit/360ac93))
* **stacc-website:** add gtm ([edec77a](https://github.com/staccx/bento/commit/edec77a))
* **stacc-website:** add working mobile menu ([f56f60e](https://github.com/staccx/bento/commit/f56f60e))
* **stacc-website:** adjust lede font-family ([0438c76](https://github.com/staccx/bento/commit/0438c76))
* **stacc-website:** improve mobile menu ([87bafae](https://github.com/staccx/bento/commit/87bafae))
* **stacc-website:** improve responsive behaviour ([7157dd5](https://github.com/staccx/bento/commit/7157dd5))
* **stacc-website:** improve responsive design ([fd44191](https://github.com/staccx/bento/commit/fd44191))
* **stacc-website:** improve trinity responsive ([679b7d8](https://github.com/staccx/bento/commit/679b7d8))
* **stacc-website:** no longer fetching clients with hide ([e7d153a](https://github.com/staccx/bento/commit/e7d153a))
* **stacc-website:** remove trinity from hero, add trinity block ([f7681fb](https://github.com/staccx/bento/commit/f7681fb))
* add components hero and hero.car ([59d964a](https://github.com/staccx/bento/commit/59d964a))



## [7.7.2](https://github.com/staccx/bento/compare/v7.7.1...v7.7.2) (2018-09-14)


### Bug Fixes

* **bento:** fix wrong file ([9aba119](https://github.com/staccx/bento/commit/9aba119))
* **sanity:** fix new props. add request cache ([d95b7a6](https://github.com/staccx/bento/commit/d95b7a6))
* **soy:** remove false positive in misplaced test ([b3fba34](https://github.com/staccx/bento/commit/b3fba34))


### Features

* **base:** add Poll ([9469c0c](https://github.com/staccx/bento/commit/9469c0c))
* **bento:** add changelog ([4626f60](https://github.com/staccx/bento/commit/4626f60))



## [7.7.1](https://github.com/staccx/bento/compare/v7.7.0...v7.7.1) (2018-09-14)


### Features

* **soy:** find misplaced dependencies ([5062d85](https://github.com/staccx/bento/commit/5062d85))



# [7.7.0](https://github.com/staccx/bento/compare/v7.6.4...v7.7.0) (2018-09-13)


### Bug Fixes

* **stacc-website:** adjust colors to pass a11y tests ([d1edc09](https://github.com/staccx/bento/commit/d1edc09))
* **stacc-website:** fix links in linkBlock ([1ca716d](https://github.com/staccx/bento/commit/1ca716d))
* **stacc-website:** fix various bugs ([890fddd](https://github.com/staccx/bento/commit/890fddd))


### Features

* **loan-process:** remove field revenue and map items in select ([548474d](https://github.com/staccx/bento/commit/548474d))
* **open-id:** add module open-id ([328b353](https://github.com/staccx/bento/commit/328b353))
* **stacc-website:** alias automatically after deploy ([ac7ce0f](https://github.com/staccx/bento/commit/ac7ce0f))
* **stacc-website:** improve SEO and PWA perf ([a2c848a](https://github.com/staccx/bento/commit/a2c848a))
* **stacc-website:** move loader to center ([a870c91](https://github.com/staccx/bento/commit/a870c91))



## [7.6.4](https://github.com/staccx/bento/compare/v7.6.3...v7.6.4) (2018-09-13)


### Bug Fixes

* **bank-in-a-box:** remove back from logout ([1a13098](https://github.com/staccx/bento/commit/1a13098))
* **developer-portal:** automatically generate oidc authority url ([eaee6c5](https://github.com/staccx/bento/commit/eaee6c5))


### Features

* **bank-in-a-box:** all the animations ([fba71ae](https://github.com/staccx/bento/commit/fba71ae))
* **bank-in-a-box:** back-buttons everywhere - icon-polish ([5754a19](https://github.com/staccx/bento/commit/5754a19))
* **bank-in-a-box:** fixed all profile-pages ([243bedf](https://github.com/staccx/bento/commit/243bedf))
* **bank-in-a-box:** icon-adjustments ([5886b28](https://github.com/staccx/bento/commit/5886b28))
* **bank-in-a-box:** improve routing ([0aca951](https://github.com/staccx/bento/commit/0aca951))
* **base:** button now StyledComponent again ([0165707](https://github.com/staccx/bento/commit/0165707))
* **stacc-website:** add now to deploy and config-file for now ([0a88e72](https://github.com/staccx/bento/commit/0a88e72))



## [7.6.3](https://github.com/staccx/bento/compare/v7.6.2...v7.6.3) (2018-09-12)


### Bug Fixes

* **bank-in-a-box:** tweaking account statements ([8f76c44](https://github.com/staccx/bento/commit/8f76c44))
* **code-generator:** spread example object in requestBody ([1b6487a](https://github.com/staccx/bento/commit/1b6487a))
* **developer-portal:** add dependency to login-oidc ([f4b6578](https://github.com/staccx/bento/commit/f4b6578))


### Features

* **bank-in-a-box:** added invoice-list. WIP ([eac2fc8](https://github.com/staccx/bento/commit/eac2fc8))



## [7.6.2](https://github.com/staccx/bento/compare/v7.6.1...v7.6.2) (2018-09-12)


### Bug Fixes

* **company-website-template:** add more reference to linkblock ([01885b0](https://github.com/staccx/bento/commit/01885b0))
* **company-website-template:** change url to preview ([deaec45](https://github.com/staccx/bento/commit/deaec45))
* **login-oidc:** reset username and password on auth failure ([f475e8c](https://github.com/staccx/bento/commit/f475e8c))
* **stacc-web:** avoid crash ([c732b50](https://github.com/staccx/bento/commit/c732b50))
* **stacc-website:** improve rich-text rendering ([acf6f61](https://github.com/staccx/bento/commit/acf6f61))
* **stacc-website:** remove hero line on small screens ([f244dc0](https://github.com/staccx/bento/commit/f244dc0))
* **stacc-website:** remove image check for block type section ([1f6d0f5](https://github.com/staccx/bento/commit/1f6d0f5))
* **stacc-website:** remove norwegian text ([cd74b82](https://github.com/staccx/bento/commit/cd74b82))
* **stacc-website:** remove warnings ([a0b365d](https://github.com/staccx/bento/commit/a0b365d))
* **stacc-website:** remove warnings ([d01c683](https://github.com/staccx/bento/commit/d01c683))


### Features

* **bank-in-a-box:** add account handling ([9052beb](https://github.com/staccx/bento/commit/9052beb))
* **bank-in-a-box:** added account-statements for account + loan ([f036093](https://github.com/staccx/bento/commit/f036093))
* **bank-in-a-box:** added accountdetail ([a58761d](https://github.com/staccx/bento/commit/a58761d))
* **bank-in-a-box:** added all neccessary pages ([280a48a](https://github.com/staccx/bento/commit/280a48a))
* **bank-in-a-box:** added due-date ([981b62f](https://github.com/staccx/bento/commit/981b62f))
* **bank-in-a-box:** added loanstatement-filter ([4b5f00b](https://github.com/staccx/bento/commit/4b5f00b))
* **bank-in-a-box:** added routing, new theming ([73322ab](https://github.com/staccx/bento/commit/73322ab))
* **bank-in-a-box:** added transactions ([4c6d99c](https://github.com/staccx/bento/commit/4c6d99c))
* **bank-in-a-box:** loan + deposit + removed some files ([bbb4f73](https://github.com/staccx/bento/commit/bbb4f73))
* **company-website:** improve previews ([38c4d7d](https://github.com/staccx/bento/commit/38c4d7d))
* **company-website:** improve previews ([3ad8046](https://github.com/staccx/bento/commit/3ad8046))
* **company-website-template:** add company address ([754326d](https://github.com/staccx/bento/commit/754326d))
* **developer-portal:** add login using username and password ([cd70122](https://github.com/staccx/bento/commit/cd70122))
* **login-oidc:** add component for login with username and password ([fc67813](https://github.com/staccx/bento/commit/fc67813))
* **stacc-website:** add footer data ([613b8e7](https://github.com/staccx/bento/commit/613b8e7))
* **stacc-website:** add new blocks ([a00a0ea](https://github.com/staccx/bento/commit/a00a0ea))
* **stacc-website:** add PreviewLive. refactor all pages to have blocks ([f1ef148](https://github.com/staccx/bento/commit/f1ef148))
* **stacc-website:** add responsibe behaviour ([a3b5534](https://github.com/staccx/bento/commit/a3b5534))
* **stacc-website:** add support for non-cut-out images in contact block ([9db0858](https://github.com/staccx/bento/commit/9db0858))
* **stacc-website:** colorful console ([c7c0c5f](https://github.com/staccx/bento/commit/c7c0c5f))
* **stacc-website:** improve responsivity of featurelist ([542613c](https://github.com/staccx/bento/commit/542613c))
* **stacc-website:** moar meta ([211d438](https://github.com/staccx/bento/commit/211d438))
* **stacc-website:** remove images from person ([2176758](https://github.com/staccx/bento/commit/2176758))
* **stacc-website:** style footer ([d41d36d](https://github.com/staccx/bento/commit/d41d36d))



## [7.6.1](https://github.com/staccx/bento/compare/v7.6.0...v7.6.1) (2018-09-11)


### Bug Fixes

* **company-website:** tweak editor ux ([0b85bfa](https://github.com/staccx/bento/commit/0b85bfa))
* **company-website-template:** add path to static pages. readonly ([c96a52a](https://github.com/staccx/bento/commit/c96a52a))
* **company-website-template:** redo menu ([6bfee82](https://github.com/staccx/bento/commit/6bfee82))
* **login-oidc:** store access token on login success ([2e464fb](https://github.com/staccx/bento/commit/2e464fb))
* **stacc-website:** add data to client list ([7462326](https://github.com/staccx/bento/commit/7462326))
* **stacc-website:** add keys etc, remove warnings ([59607ae](https://github.com/staccx/bento/commit/59607ae))
* **stacc-website:** close submenu on click ([81155fa](https://github.com/staccx/bento/commit/81155fa))
* **stacc-website:** fix crashing from subnav in menu ([c475ae4](https://github.com/staccx/bento/commit/c475ae4))
* **stacc-website:** fix data ([9140e1e](https://github.com/staccx/bento/commit/9140e1e))
* **stacc-website:** fix menu groq and fields ([2ae2e9e](https://github.com/staccx/bento/commit/2ae2e9e))
* **stacc-website:** fix submenu, now works ([3f6c6d1](https://github.com/staccx/bento/commit/3f6c6d1))
* **stacc-website:** improve SectionHead justification ([6d34ca8](https://github.com/staccx/bento/commit/6d34ca8))
* **stacc-website:** reverse every other story ([96e0b44](https://github.com/staccx/bento/commit/96e0b44))
* **stacc-website:** show referenced submenuitems ([1dbd2a8](https://github.com/staccx/bento/commit/1dbd2a8))


### Features

* **bank-in-a-box:** removed inbox and deposit ([a1e831c](https://github.com/staccx/bento/commit/a1e831c))
* **company-website:** add description to Client ([32bea86](https://github.com/staccx/bento/commit/32bea86))
* **sanity:** add otemoto, new dashboard for feature toggling ([2f4ca2c](https://github.com/staccx/bento/commit/2f4ca2c))
* **sanity:** add pick and filter to SanityDocument ([9ee0dc8](https://github.com/staccx/bento/commit/9ee0dc8))
* **sanity:** add pick and filter to SanityDocument ([7652ffb](https://github.com/staccx/bento/commit/7652ffb))
* **stacc-website:** add arrrow to submenu ([c3e06c3](https://github.com/staccx/bento/commit/c3e06c3))
* **stacc-website:** add code splitting ([6a5a1d0](https://github.com/staccx/bento/commit/6a5a1d0))
* **stacc-website:** add link to clientpreview ([ebdc3ed](https://github.com/staccx/bento/commit/ebdc3ed))
* **stacc-website:** add support for different page types ([ae18c8b](https://github.com/staccx/bento/commit/ae18c8b))
* **stacc-website:** add support for meta og: tags ([90cf492](https://github.com/staccx/bento/commit/90cf492))
* **stacc-website:** fix routing for all pages ([e6ee910](https://github.com/staccx/bento/commit/e6ee910))



# [7.6.0](https://github.com/staccx/bento/compare/v7.5.0...v7.6.0) (2018-09-07)


### Bug Fixes

* **base:** fix issue when search term was empty ([a73a204](https://github.com/staccx/bento/commit/a73a204))


### Features

* **base:** add Search. client side search ([a9cd7d8](https://github.com/staccx/bento/commit/a9cd7d8))
* **company-website-template:** add logo and style ([760bfb0](https://github.com/staccx/bento/commit/760bfb0))
* **company-website-template:** add timeline block ([0ceb96a](https://github.com/staccx/bento/commit/0ceb96a))
* **dealerpad:** added simulate new task as well as new step ([6e87a50](https://github.com/staccx/bento/commit/6e87a50))
* **dealerpad:** made responsive ([dae82f4](https://github.com/staccx/bento/commit/dae82f4))
* **dealerpad:** simulate new case ([1df1bee](https://github.com/staccx/bento/commit/1df1bee))
* **stacc-website:** add clients overview ([01345a1](https://github.com/staccx/bento/commit/01345a1))
* **stacc-website:** add cms data to Team page ([37ce17c](https://github.com/staccx/bento/commit/37ce17c))
* **stacc-website:** add ContactUs to Case ([f443643](https://github.com/staccx/bento/commit/f443643))
* **stacc-website:** add Search for people ([2e1240b](https://github.com/staccx/bento/commit/2e1240b))
* **stacc-website:** add serialized for timeline ([226eff0](https://github.com/staccx/bento/commit/226eff0))



# [7.5.0](https://github.com/staccx/bento/compare/v7.4.0...v7.5.0) (2018-09-06)


### Bug Fixes

* **dealerpad:** disable infinite call of caseStore.refreshAll() ([a6aba7e](https://github.com/staccx/bento/commit/a6aba7e))
* **stacc-website:** remove unwanted whitespace after quote-block ([46fef00](https://github.com/staccx/bento/commit/46fef00))


### Features

* **dealerpad:** add new case ([94d2641](https://github.com/staccx/bento/commit/94d2641))
* **dealerpad:** added carConfigurator ([020fc66](https://github.com/staccx/bento/commit/020fc66))
* **dealerpad:** overview has statistics and links ([66dcd73](https://github.com/staccx/bento/commit/66dcd73))
* **dealerpad:** started on statistic-section on overview ([f08b0f5](https://github.com/staccx/bento/commit/f08b0f5))
* **stacc-webiste:** use components on team-page ([6c0e991](https://github.com/staccx/bento/commit/6c0e991))
* **stacc-website:** add case page ([135f1bb](https://github.com/staccx/bento/commit/135f1bb))



# [7.4.0](https://github.com/staccx/bento/compare/v7.3.0...v7.4.0) (2018-09-05)


### Bug Fixes

* **bento:** add eslint to workspace devDependencies ([07a21bd](https://github.com/staccx/bento/commit/07a21bd))
* **sanity:** fix helper new up ([101ab2c](https://github.com/staccx/bento/commit/101ab2c))


### Features

* **company-website-template:** add invertedRoutes to menu ([189799b](https://github.com/staccx/bento/commit/189799b))
* **company-website-template:** add script to upload people ([01e922b](https://github.com/staccx/bento/commit/01e922b))
* **imove:** add some footer styling ([c17edef](https://github.com/staccx/bento/commit/c17edef))
* **imove:** replace image ([8bf8f89](https://github.com/staccx/bento/commit/8bf8f89))
* **imove:** structure footer ([8872eeb](https://github.com/staccx/bento/commit/8872eeb))
* **stacc-website:** add inverted from sanity ([84cf6d8](https://github.com/staccx/bento/commit/84cf6d8))
* **stacc-website:** team page is now populated ([afb4c6e](https://github.com/staccx/bento/commit/afb4c6e))



# [7.3.0](https://github.com/staccx/bento/compare/v7.2.8...v7.3.0) (2018-09-04)


### Features

* **developer-portal:** add limited support for requestBody ([9e5ec31](https://github.com/staccx/bento/commit/9e5ec31))



## [7.2.8](https://github.com/staccx/bento/compare/v7.2.7...v7.2.8) (2018-09-04)


### Features

* **bento:** add publish shell script ([fad727d](https://github.com/staccx/bento/commit/fad727d))
* **developer-portal:** fix response only taking 200 json ([a816343](https://github.com/staccx/bento/commit/a816343))
* **imove:** add bottom padding to pricing section ([44cdb70](https://github.com/staccx/bento/commit/44cdb70))
* **imove:** add footer component base ([c006767](https://github.com/staccx/bento/commit/c006767))
* **imove:** add pricing section ([cb73131](https://github.com/staccx/bento/commit/cb73131))
* **stacc-website:** add Stories component ([e9b3825](https://github.com/staccx/bento/commit/e9b3825))
* **stacc-website:** add support for sanity images in SectionHead ([9974e5a](https://github.com/staccx/bento/commit/9974e5a))
* **stacc-website:** tweak whitespace ([891e244](https://github.com/staccx/bento/commit/891e244))



## [7.2.7](https://github.com/staccx/bento/compare/v7.2.5...v7.2.7) (2018-09-04)


### Features

* **stacc-website:** add container to serializer ([0e1dfe8](https://github.com/staccx/bento/commit/0e1dfe8))



## [7.2.5](https://github.com/staccx/bento/compare/v7.2.4...v7.2.5) (2018-09-04)


### Bug Fixes

* **developer-portal:** remove missing text ([f3df114](https://github.com/staccx/bento/commit/f3df114))



## [7.2.4](https://github.com/staccx/bento/compare/v7.2.3...v7.2.4) (2018-09-04)


### Bug Fixes

* **developer-portal:** dynamic example response ([b827511](https://github.com/staccx/bento/commit/b827511))


### Features

* **imove:** add imove web ([7f91afa](https://github.com/staccx/bento/commit/7f91afa))
* **imove:** add pricing component base ([9d9c289](https://github.com/staccx/bento/commit/9d9c289))
* **imove:** move component calls to page level ([388c3b7](https://github.com/staccx/bento/commit/388c3b7))
* **imove:** use flex for features list ([085bd64](https://github.com/staccx/bento/commit/085bd64))
* **stacc-website:** add ClientsOverview ([8560e10](https://github.com/staccx/bento/commit/8560e10))



## [7.2.3](https://github.com/staccx/bento/compare/v7.2.1...v7.2.3) (2018-09-04)


### Bug Fixes

* **developer-portal:** fix issue where operation tag was null ([2135f92](https://github.com/staccx/bento/commit/2135f92))
* **stacc-website:** add key to list items ([85d2a4d](https://github.com/staccx/bento/commit/85d2a4d))


### Features

* **company-website-template:** add story/stories to blocks ([fcb3ce7](https://github.com/staccx/bento/commit/fcb3ce7))
* **fundu-theme:** add colors for html tags ([f5bf2d0](https://github.com/staccx/bento/commit/f5bf2d0))
* **sanity:** add component SanityImage ([6d99c80](https://github.com/staccx/bento/commit/6d99c80))
* **stacc-website:** add menu from sanity ([7f00487](https://github.com/staccx/bento/commit/7f00487))
* **stacc-website:** add NavigationSubpage component ([fc7946a](https://github.com/staccx/bento/commit/fc7946a))
* **website:** change page root to redirect to first subpage ([2675c50](https://github.com/staccx/bento/commit/2675c50))



## [7.2.1](https://github.com/staccx/bento/compare/v7.2.0...v7.2.1) (2018-09-03)


### Bug Fixes

* **company-website-template:** change subpage to be object ([90a9a64](https://github.com/staccx/bento/commit/90a9a64))
* **developer-portal:** fixed issue with non-required fields ([df70a27](https://github.com/staccx/bento/commit/df70a27))


### Features

* **company-website-template:** add hero block type ([62b40e0](https://github.com/staccx/bento/commit/62b40e0))
* **formatting:** add dashIt function for kebab-case formatting ([776d42c](https://github.com/staccx/bento/commit/776d42c))
* **login-oidc:** component for logging in using oidc ([693da2f](https://github.com/staccx/bento/commit/693da2f))
* **stacc-website:** add hero block in web ([13ef7ee](https://github.com/staccx/bento/commit/13ef7ee))
* **stacc-website:** add more serializers ([3b7e9ab](https://github.com/staccx/bento/commit/3b7e9ab))
* **stacc-website:** add page subpage rendering ([d995aa7](https://github.com/staccx/bento/commit/d995aa7))
* **stacc-website:** add styles for inverted header ([4bf9bb7](https://github.com/staccx/bento/commit/4bf9bb7))
* **stacc-website:** improve ContentLinks spacing ([60aab94](https://github.com/staccx/bento/commit/60aab94))
* **stacc-website:** redo hero ([da9c0e2](https://github.com/staccx/bento/commit/da9c0e2))
* **stacc-website:** remove breadcrumbs from SectionHead ([0c8e175](https://github.com/staccx/bento/commit/0c8e175))



# [7.2.0](https://github.com/staccx/bento/compare/v7.1.1...v7.2.0) (2018-08-31)


### Bug Fixes

* **code-generator:** add null handling for openapi.servers ([3119baa](https://github.com/staccx/bento/commit/3119baa))
* **developer-portal:** fix issue where tags could be null ([c4c3117](https://github.com/staccx/bento/commit/c4c3117))
* **sanity:** exported components ([04d2fb3](https://github.com/staccx/bento/commit/04d2fb3))
* **sanity:** fix components not exported ([6e20b5b](https://github.com/staccx/bento/commit/6e20b5b))
* **stacc-web:** fixed " problem ([cf1c915](https://github.com/staccx/bento/commit/cf1c915))
* **stacc-website:** change sectionHead to use SectionHead comp ([8485d9d](https://github.com/staccx/bento/commit/8485d9d))
* **stacc-website:** fix error in breadcrumb ([3ff4b3c](https://github.com/staccx/bento/commit/3ff4b3c))
* **stacc-website:** person to own component ([385d29c](https://github.com/staccx/bento/commit/385d29c))
* **stacc-website:** update meta-info ([8c807da](https://github.com/staccx/bento/commit/8c807da))


### Features

* **base:** add EmailInputl. Should be redone though ([656cb0a](https://github.com/staccx/bento/commit/656cb0a))
* **base:** added autocomplete to input ([51aa28d](https://github.com/staccx/bento/commit/51aa28d))
* **company-website-template:** add block types ([b4cf10c](https://github.com/staccx/bento/commit/b4cf10c))
* **company-website-template:** add initial entities ([88d5249](https://github.com/staccx/bento/commit/88d5249))
* **company-website-template:** remove tab. Page now has subpages ([e96a0b6](https://github.com/staccx/bento/commit/e96a0b6))
* **imove:** init ([6781fdd](https://github.com/staccx/bento/commit/6781fdd))
* **soy:** search for wild devDependencies ([301a538](https://github.com/staccx/bento/commit/301a538))
* **soy:** wild version count ([ee8824e](https://github.com/staccx/bento/commit/ee8824e))
* **stacc-web:** add Blocks viz first pass ([52ac509](https://github.com/staccx/bento/commit/52ac509))
* **stacc-web:** add quote component ([92c419c](https://github.com/staccx/bento/commit/92c419c))
* **stacc-web:** added favicons ([f1e70dc](https://github.com/staccx/bento/commit/f1e70dc))
* **stacc-web:** content ([c3abbcd](https://github.com/staccx/bento/commit/c3abbcd))
* **stacc-webiste:** add more content ([6768a15](https://github.com/staccx/bento/commit/6768a15))
* **stacc-website:** add contact-page and form ([d7ee846](https://github.com/staccx/bento/commit/d7ee846))
* **stacc-website:** add Sanity + start serializing ([227d14a](https://github.com/staccx/bento/commit/227d14a))
* **stacc-website:** menu is now responsive ([249486c](https://github.com/staccx/bento/commit/249486c))
* **stacc-website:** revamp homepage ([770f66d](https://github.com/staccx/bento/commit/770f66d))
* **stacc-website:** story + Quote now responsive ([717eeb8](https://github.com/staccx/bento/commit/717eeb8))



## [7.1.1](https://github.com/staccx/bento/compare/v7.0.2...v7.1.1) (2018-08-27)


### Bug Fixes

* **base:** remove strict themeProps for Layout ([8a41ff3](https://github.com/staccx/bento/commit/8a41ff3))
* **color:** add color as dependency ([9b58320](https://github.com/staccx/bento/commit/9b58320))
* **i18n:** add missing dependency ([f813cb3](https://github.com/staccx/bento/commit/f813cb3))
* **soy:** different message after pouring ([2dde208](https://github.com/staccx/bento/commit/2dde208))


### Features

* **sanity-provider:** add new module for working with sanity ([1bd3113](https://github.com/staccx/bento/commit/1bd3113))
* **soy:** add cli for checking and updating dependencies ([269dd0e](https://github.com/staccx/bento/commit/269dd0e))
* **stacc-web:** from people/about ➡ Team 💥 ([29826da](https://github.com/staccx/bento/commit/29826da))
* **stacc-webiste:** add breadcrumbs ([96922fa](https://github.com/staccx/bento/commit/96922fa))
* **stacc-website:** add more content ([40568af](https://github.com/staccx/bento/commit/40568af))
* **stacc-website:** added people-page ([07e78a7](https://github.com/staccx/bento/commit/07e78a7))
* **stacc-website:** added search to people-page. Not working atm ([f81eb73](https://github.com/staccx/bento/commit/f81eb73))
* **stacc-website:** improve header and footer ([8b06fcc](https://github.com/staccx/bento/commit/8b06fcc))
* **stacc-website:** improve home-page, story, hero components ([a6fc739](https://github.com/staccx/bento/commit/a6fc739))
* **stacc-website:** new images + portrait-direction on images on team ([95aaa03](https://github.com/staccx/bento/commit/95aaa03))



## [7.0.2](https://github.com/staccx/bento/compare/v7.0.1...v7.0.2) (2018-08-23)


### Bug Fixes

* **bank-in-a-box:** correct build script ([52ecff8](https://github.com/staccx/bento/commit/52ecff8))
* **internal:** fix build-blocking bugs ([3db5738](https://github.com/staccx/bento/commit/3db5738))
* **stacc-website:** add missing exports, newlines ([0e9ded7](https://github.com/staccx/bento/commit/0e9ded7))


### Features

* **stacc-website:** add visual tweaks ([5a4ca63](https://github.com/staccx/bento/commit/5a4ca63))



## [7.0.1](https://github.com/staccx/bento/compare/v7.0.0...v7.0.1) (2018-08-23)


### Bug Fixes

* **dealerpad:** fix chat ([8886044](https://github.com/staccx/bento/commit/8886044))
* **dealerpad:** fix state ([9351d7d](https://github.com/staccx/bento/commit/9351d7d))
* **dealerpad:** render Loading while uploading file ([83b07bb](https://github.com/staccx/bento/commit/83b07bb))
* **stacc-web:** added flag to feature-list ([ef946b5](https://github.com/staccx/bento/commit/ef946b5))


### Features

* **dealerpad:** indicate unread messages in case list ([80abfa7](https://github.com/staccx/bento/commit/80abfa7))
* **sanity:** add social link to person. rename post to article ([0f11be7](https://github.com/staccx/bento/commit/0f11be7))
* **stacc-web:** add routing and simple header ([96da6b1](https://github.com/staccx/bento/commit/96da6b1))
* **stacc-web:** add simple footer ([073af15](https://github.com/staccx/bento/commit/073af15))
* **stacc-web:** start on pages + header + routing ([4f5b912](https://github.com/staccx/bento/commit/4f5b912))
* **stacc-website:** add contact us component ([c793394](https://github.com/staccx/bento/commit/c793394))
* **stacc-website:** add more stuff ([e818aed](https://github.com/staccx/bento/commit/e818aed))
* **stacc-website:** add service apge ([1428dca](https://github.com/staccx/bento/commit/1428dca))
* **stacc-website:** add story, goto components, tweaks ([2de05da](https://github.com/staccx/bento/commit/2de05da))
* **stacc-website:** initializing project ([bd4a66f](https://github.com/staccx/bento/commit/bd4a66f))



# [7.0.0](https://github.com/staccx/bento/compare/v6.7.0...v7.0.0) (2018-08-21)


### Features

* **sanity:** add start of template for cms company website ([fb37f99](https://github.com/staccx/bento/commit/fb37f99))



# [6.7.0](https://github.com/staccx/bento/compare/v6.6.0...v6.7.0) (2018-08-20)


### Features

* **formatting:** add phone formatting ([8f841f6](https://github.com/staccx/bento/commit/8f841f6))
* **web:** add invoice list and route ([f472c07](https://github.com/staccx/bento/commit/f472c07))



# [6.6.0](https://github.com/staccx/bento/compare/v6.5.1...v6.6.0) (2018-08-20)


### Bug Fixes

* **dealerpad:** add descriptions to getVehicleLabel ([e1d07e6](https://github.com/staccx/bento/commit/e1d07e6))
* **dealerpad:** added date-formatting to chat ([b6af2f3](https://github.com/staccx/bento/commit/b6af2f3))
* **dealerpad:** adjustments vehicleLabel ([8ffa6b8](https://github.com/staccx/bento/commit/8ffa6b8))
* **dealerpad:** fix case details mapping ([1c69487](https://github.com/staccx/bento/commit/1c69487))
* **dealerpad:** fix case documentation table ([0948946](https://github.com/staccx/bento/commit/0948946))
* **dealerpad:** import Loading ([8467ace](https://github.com/staccx/bento/commit/8467ace))
* **dealerpad:** n/a removed on ContactPerson ([b6a045b](https://github.com/staccx/bento/commit/b6a045b))
* **dealerpad:** scroll to bottom on new messages ([3d68d0f](https://github.com/staccx/bento/commit/3d68d0f))
* **dealerpad:** styling of caseHeader if missing information ([6e5523f](https://github.com/staccx/bento/commit/6e5523f))
* **dealerpad:** updated location of loading for documents ([a803ade](https://github.com/staccx/bento/commit/a803ade))
* **invoicing:** fix NaN bug in calculation ([5e05b75](https://github.com/staccx/bento/commit/5e05b75))


### Features

* **base:** change Logo no longer using token. add preview for NewBadge ([d9b7e9c](https://github.com/staccx/bento/commit/d9b7e9c))
* **dealerpad:** added name to CasesList ([4615973](https://github.com/staccx/bento/commit/4615973))
* **invoicing:** add AddCustomer component ([95ddb89](https://github.com/staccx/bento/commit/95ddb89))
* **invoicing:** add invoice calculation ([2f68fab](https://github.com/staccx/bento/commit/2f68fab))
* **invoicing:** calculate total sum ([598a9f0](https://github.com/staccx/bento/commit/598a9f0))
* **invoicing:** move logic to state ([cfa9038](https://github.com/staccx/bento/commit/cfa9038))
* **nordea-theme:** add nordea-loading ([8287c94](https://github.com/staccx/bento/commit/8287c94))



## [6.5.1](https://github.com/staccx/bento/compare/v6.4.0...v6.5.1) (2018-08-16)


### Bug Fixes

* **base:** add min-height to tag ([3453fe5](https://github.com/staccx/bento/commit/3453fe5))
* **base:** layout.grid 50/50 now actually responsive ([e2e5801](https://github.com/staccx/bento/commit/e2e5801))
* **base:** remove strict checking of wrapper sizes ([8f92ad3](https://github.com/staccx/bento/commit/8f92ad3))
* **dealerpad:** add missing key ([d330ee5](https://github.com/staccx/bento/commit/d330ee5))
* **dealerpad:** added tasks to caseStore ([a13b8ca](https://github.com/staccx/bento/commit/a13b8ca))
* **dealerpad:** aria-labels for emojis ([f6878d2](https://github.com/staccx/bento/commit/f6878d2))
* **dealerpad:** close menu when navigating to new page ([1a421f4](https://github.com/staccx/bento/commit/1a421f4))
* **dealerpad:** contition for default chat window contents ([b430722](https://github.com/staccx/bento/commit/b430722))
* **dealerpad:** fixed merge conflict ([94f2eec](https://github.com/staccx/bento/commit/94f2eec))
* **dealerpad:** handle location pathname not ending with / ([e5a9447](https://github.com/staccx/bento/commit/e5a9447))
* **dealerpad:** mobile menu location prop ([567e51b](https://github.com/staccx/bento/commit/567e51b))
* **dealerpad:** prepare document upload ([a4964a1](https://github.com/staccx/bento/commit/a4964a1))
* **dealerpad:** remove fileupload on news ([1bdfc1b](https://github.com/staccx/bento/commit/1bdfc1b))
* **dealerpad:** remove missing key from CaseProgress ([4a3e4df](https://github.com/staccx/bento/commit/4a3e4df))
* **dealerpad:** remove warning from missing required prop ([257dd92](https://github.com/staccx/bento/commit/257dd92))
* **dealerpad:** update messages on send and receive ([d0dd959](https://github.com/staccx/bento/commit/d0dd959))
* **invoices:** remove errors ([0b6a199](https://github.com/staccx/bento/commit/0b6a199))
* **styleguide:** themifyTable now shows themeProp name instead of value ([24e3dc3](https://github.com/staccx/bento/commit/24e3dc3))


### Features

* **base:** add CopyToClipboard component with renderProp ([057953d](https://github.com/staccx/bento/commit/057953d))
* **base:** add features in FileInput ([0887feb](https://github.com/staccx/bento/commit/0887feb))
* **dealerpad:** add case progress mapping ([955edbd](https://github.com/staccx/bento/commit/955edbd))
* **dealerpad:** add empty loading state to case ([61517ca](https://github.com/staccx/bento/commit/61517ca))
* **dealerpad:** added styling for empty chat ([67b2ad2](https://github.com/staccx/bento/commit/67b2ad2))
* **dealerpad:** document uploading ([41ee9c4](https://github.com/staccx/bento/commit/41ee9c4))
* **dealerpad:** fetch cases from api ([95f9c8e](https://github.com/staccx/bento/commit/95f9c8e))
* **dealerpad:** first chat version ([84686ba](https://github.com/staccx/bento/commit/84686ba))
* **dealerpad:** moved cases to mobx store ([4c50707](https://github.com/staccx/bento/commit/4c50707))
* **invoicing:** add basic routing ([1fa6bdd](https://github.com/staccx/bento/commit/1fa6bdd))
* **invoicing:** add CreateInvoice page ([92a7bdc](https://github.com/staccx/bento/commit/92a7bdc))
* **invoicing:** add feature for adding items to invoice ([244d312](https://github.com/staccx/bento/commit/244d312))
* **invoicing:** add new package for invoicing app ([df694a0](https://github.com/staccx/bento/commit/df694a0))
* overrideHeaders ([898e023](https://github.com/staccx/bento/commit/898e023))



# [6.4.0](https://github.com/staccx/bento/compare/v6.3.1...v6.4.0) (2018-08-07)


### Bug Fixes

* **dealerpad:** add missing styles to volvo-theme ([0e2e54b](https://github.com/staccx/bento/commit/0e2e54b))
* **dealerpad:** add width to svg-arrows ([5d2c431](https://github.com/staccx/bento/commit/5d2c431))
* **dealerpad:** set nordea as default theme ([c9a420a](https://github.com/staccx/bento/commit/c9a420a))


### Features

* **base:** add FileInput component ([7182c57](https://github.com/staccx/bento/commit/7182c57))
* **base:** add Icon to FileUpload ([5a22056](https://github.com/staccx/bento/commit/5a22056))
* **base:** add support for multiple files ([9915fef](https://github.com/staccx/bento/commit/9915fef))
* **dealerpad:** add emojis to chat ([b4c85c4](https://github.com/staccx/bento/commit/b4c85c4))
* **dealerpad:** added development proxy for api ([4d70ee1](https://github.com/staccx/bento/commit/4d70ee1))
* **dealerpad:** navigate on file-upload ([ae0c2cb](https://github.com/staccx/bento/commit/ae0c2cb))
* **dealerpad:** style FileUpload ([7fd7cae](https://github.com/staccx/bento/commit/7fd7cae))
* **dealerpad:** use fileinput for fileupload ([f72e7ba](https://github.com/staccx/bento/commit/f72e7ba))



## [6.3.1](https://github.com/staccx/bento/compare/v6.3.0...v6.3.1) (2018-08-06)



# [6.3.0](https://github.com/staccx/bento/compare/v6.2.0...v6.3.0) (2018-08-06)


### Bug Fixes

* **bento:** only run precommit script on changed ([d2eab6b](https://github.com/staccx/bento/commit/d2eab6b))
* **dealerpad:** remove private flag ([f626095](https://github.com/staccx/bento/commit/f626095))
* **styleguide:** border left on menu ([3191591](https://github.com/staccx/bento/commit/3191591))
* **styleguide:** default centering + min-widths on components ([06786fa](https://github.com/staccx/bento/commit/06786fa))
* **styleguide:** fix documentation for NatilnalIdInput ([22de7fe](https://github.com/staccx/bento/commit/22de7fe))
* **styleguide:** fixed missing import ([203dd5f](https://github.com/staccx/bento/commit/203dd5f))
* **styleguide:** html rendering works ([67d0fd4](https://github.com/staccx/bento/commit/67d0fd4))
* **styleguide:** if no Themify-props don't show anything ([e3cbe62](https://github.com/staccx/bento/commit/e3cbe62))


### Features

* **base:** donut warningthreshold ([a277bdf](https://github.com/staccx/bento/commit/a277bdf))
* **base:** logo ([84577b6](https://github.com/staccx/bento/commit/84577b6))
* **base:** progressbar ([d08767d](https://github.com/staccx/bento/commit/d08767d))
* **base:** slider percentage ([d32bb12](https://github.com/staccx/bento/commit/d32bb12))
* **dealerpad:** add tabs for mobile view of case page ([3aa6a41](https://github.com/staccx/bento/commit/3aa6a41))
* **styleguide:** Added Apps ([c7074ea](https://github.com/staccx/bento/commit/c7074ea))
* **styleguide:** added documentation for image-component ([5d0da8a](https://github.com/staccx/bento/commit/5d0da8a))
* **styleguide:** document more components ([597aa13](https://github.com/staccx/bento/commit/597aa13))
* **styleguide:** documented a bunch of components ([98bcf46](https://github.com/staccx/bento/commit/98bcf46))
* **styleguide:** documented layout ([015191e](https://github.com/staccx/bento/commit/015191e))
* **styleguide:** Moar documentation + styling of menu ([efedf5f](https://github.com/staccx/bento/commit/efedf5f))
* **styleguide:** typeToString -> parseType now returns elements ([81eaa11](https://github.com/staccx/bento/commit/81eaa11))



# [6.2.0](https://github.com/staccx/bento/compare/v6.1.1...v6.2.0) (2018-07-12)


### Bug Fixes

* **aprila-theme:** Added webfont-solution to Aprila-theme ([830927b](https://github.com/staccx/bento/commit/830927b))
* **base:** CodeRenderer can now style html attr and tags ([0e84da4](https://github.com/staccx/bento/commit/0e84da4))
* **base:** Fixed grammar settings for markup ([0d95edc](https://github.com/staccx/bento/commit/0d95edc))
* **base:** progressbar should have a min-width ([25755a8](https://github.com/staccx/bento/commit/25755a8))
* **base:** removed unused prop ignoreBase ([c1126fe](https://github.com/staccx/bento/commit/c1126fe))
* **base:** removed unused props for CheckBox ([b9a1f8d](https://github.com/staccx/bento/commit/b9a1f8d))
* **base:** removed unused props from Toggle ([0a7a899](https://github.com/staccx/bento/commit/0a7a899))
* **base:** required props for CodeRenderer are required ([76abe34](https://github.com/staccx/bento/commit/76abe34))
* **bento:** readme updated ([464f6c6](https://github.com/staccx/bento/commit/464f6c6))
* **bento:** updated readme ([82af154](https://github.com/staccx/bento/commit/82af154))
* **fundu-theme:** Fixed wrongly renamed file ([d71f9a2](https://github.com/staccx/bento/commit/d71f9a2))
* **norefjell:** fixed import ([61bd1c7](https://github.com/staccx/bento/commit/61bd1c7))
* **styleguide:** 💅 Make the boxes pop! 💥 ([2d95eff](https://github.com/staccx/bento/commit/2d95eff))
* **styleguide:** 💅 on tables + Customprops ([b71d30c](https://github.com/staccx/bento/commit/b71d30c))
* **styleguide:** Added DocsTheme to StaccTheme ([30982fa](https://github.com/staccx/bento/commit/30982fa))
* **styleguide:** allow components with undefined props ([4fed693](https://github.com/staccx/bento/commit/4fed693))
* **styleguide:** ComponentPreview now renders ComponentDocumentation(background) with styleguide theme ([5b6784a](https://github.com/staccx/bento/commit/5b6784a))
* **styleguide:** componentRef undefined ([95cf66f](https://github.com/staccx/bento/commit/95cf66f))
* **styleguide:** corrected import path in previews.js ([c4e41f9](https://github.com/staccx/bento/commit/c4e41f9))
* **styleguide:** don't show CustomProps if no Customprops ([6eb0c91](https://github.com/staccx/bento/commit/6eb0c91))
* **styleguide:** eslint now ignores generated/components.js ([8581154](https://github.com/staccx/bento/commit/8581154))
* **styleguide:** filter out props without type ([c78d487](https://github.com/staccx/bento/commit/c78d487))
* **styleguide:** fix position absolute problems in components ([bd33765](https://github.com/staccx/bento/commit/bd33765))
* **styleguide:** Fixed variant rendering+++ ([4a19fea](https://github.com/staccx/bento/commit/4a19fea))
* **styleguide:** friendlier propTypes ([39f7f25](https://github.com/staccx/bento/commit/39f7f25))
* **styleguide:** Handle no themeprops in component ([f87d370](https://github.com/staccx/bento/commit/f87d370))
* **styleguide:** make generated directory in src/ if not exists ([7e4183c](https://github.com/staccx/bento/commit/7e4183c))
* **styleguide:** now handles components without themeProps ([f6baf2d](https://github.com/staccx/bento/commit/f6baf2d))
* **styleguide:** Preview componentstate now works for previews ([8e3c330](https://github.com/staccx/bento/commit/8e3c330))
* **styleguide:** prop is required if prop name ends with .isRequired ([f56b768](https://github.com/staccx/bento/commit/f56b768))
* **styleguide:** props -> this.props ([703fdde](https://github.com/staccx/bento/commit/703fdde))
* **styleguide:** Removed links from root menu items. ([b3ccdc6](https://github.com/staccx/bento/commit/b3ccdc6))
* **styleguide:** show proptypes again ([efd8dc9](https://github.com/staccx/bento/commit/efd8dc9))
* **styleguide:** Slider fix for custom props ([44cd063](https://github.com/staccx/bento/commit/44cd063))
* **styleguide:** smaller fontsize on tables ([11eb38b](https://github.com/staccx/bento/commit/11eb38b))
* **styleguide:** Stacc-theme as default ([7fbe854](https://github.com/staccx/bento/commit/7fbe854))
* **styleguide:** Word wrapping on html output ([14f3d73](https://github.com/staccx/bento/commit/14f3d73))
* **theme:** 'themes' prop should be an object ([59ef8cb](https://github.com/staccx/bento/commit/59ef8cb))
* **theme:** unified naming across themes ([c65d480](https://github.com/staccx/bento/commit/c65d480))


### Features

* **base:** Added Form and FormField. Will hopefully make forms more enjoyable ([5e9d80b](https://github.com/staccx/bento/commit/5e9d80b))
* **base:** Documented Box ([c2340c1](https://github.com/staccx/bento/commit/c2340c1))
* **bento:** added readme ([33defd1](https://github.com/staccx/bento/commit/33defd1))
* **dealerpad:** Added a theme for Volvo ([03a5bee](https://github.com/staccx/bento/commit/03a5bee))
* **dealerpad:** added default transitions between pages ([37d14f3](https://github.com/staccx/bento/commit/37d14f3))
* **dealerpad:** Added Notification ([0af5a3b](https://github.com/staccx/bento/commit/0af5a3b))
* **dealerpad:** Animation-tweaks. Removed console-errors ([b3f3d2e](https://github.com/staccx/bento/commit/b3f3d2e))
* **dealerpad:** Animations all the way 💣 ([e402ac8](https://github.com/staccx/bento/commit/e402ac8))
* **dealerpad:** Contact-block-adjustments ([c28ce0a](https://github.com/staccx/bento/commit/c28ce0a))
* **dealerpad:** detail-adjustment on cases-list ([6f42ee8](https://github.com/staccx/bento/commit/6f42ee8))
* **dealerpad:** fixed filter-button ([9eaa944](https://github.com/staccx/bento/commit/9eaa944))
* **dealerpad:** One search to rule them all ([54646dd](https://github.com/staccx/bento/commit/54646dd))
* **dealerpad:** responsive ([a283ed0](https://github.com/staccx/bento/commit/a283ed0))
* **dealerpad:** Tiny adjustments ([061642e](https://github.com/staccx/bento/commit/061642e))
* **devportal:** Back-button on case. start on contact ([dd93767](https://github.com/staccx/bento/commit/dd93767))
* **plop:** added simplified plop for  base components ([0fbee71](https://github.com/staccx/bento/commit/0fbee71))
* **savings-advisor:** Savings-advisor is now a module ([3febb83](https://github.com/staccx/bento/commit/3febb83))
* **soy:** Added xml-beautifier ([ddab6a3](https://github.com/staccx/bento/commit/ddab6a3))
* **stacc-theme:** Added colors for html rendering ([7861dbc](https://github.com/staccx/bento/commit/7861dbc))
* **styleguide:** 💅 on CustomProps ([8bf7b2b](https://github.com/staccx/bento/commit/8bf7b2b))
* **styleguide:** Added basic layout to styleguide ([0e3a852](https://github.com/staccx/bento/commit/0e3a852))
* **styleguide:** added CheckBox preview ([baf1556](https://github.com/staccx/bento/commit/baf1556))
* **styleguide:** added CheckGroup preview ([d16a8fe](https://github.com/staccx/bento/commit/d16a8fe))
* **styleguide:** added CodeRenderer preview ([59e5437](https://github.com/staccx/bento/commit/59e5437))
* **styleguide:** added component source ([d0b5551](https://github.com/staccx/bento/commit/d0b5551))
* **styleguide:** added DataViz previews ([6db0479](https://github.com/staccx/bento/commit/6db0479))
* **styleguide:** added Expand preview ([55b8286](https://github.com/staccx/bento/commit/55b8286))
* **styleguide:** added Form preview ([574bd07](https://github.com/staccx/bento/commit/574bd07))
* **styleguide:** Added fundu-theme ([2c1e69d](https://github.com/staccx/bento/commit/2c1e69d))
* **styleguide:** added Logo preview ([c83bbbd](https://github.com/staccx/bento/commit/c83bbbd))
* **styleguide:** added Odometer preview ([08db2cc](https://github.com/staccx/bento/commit/08db2cc))
* **styleguide:** added preview for Modal ([f54719d](https://github.com/staccx/bento/commit/f54719d))
* **styleguide:** added previews for form components ([6907d10](https://github.com/staccx/bento/commit/6907d10))
* **styleguide:** added previews for lists ([c6355c7](https://github.com/staccx/bento/commit/c6355c7))
* **styleguide:** Added Stacc-theme (NOTE: You have to yarn link) ([fcd9e96](https://github.com/staccx/bento/commit/fcd9e96))
* **styleguide:** Aligning styling on styleguide and developer-portal ([7807615](https://github.com/staccx/bento/commit/7807615))
* **styleguide:** All variants are now rendered. Removed select ([5522169](https://github.com/staccx/bento/commit/5522169))
* **styleguide:** Basic layout-rendering of components ([a0be4b9](https://github.com/staccx/bento/commit/a0be4b9))
* **styleguide:** Better table-rendering ([703c0e2](https://github.com/staccx/bento/commit/703c0e2))
* **styleguide:** Centered components ([ea1a7ef](https://github.com/staccx/bento/commit/ea1a7ef))
* **styleguide:** Component can now have state. ([7522e30](https://github.com/staccx/bento/commit/7522e30))
* **styleguide:** CustomProps ([f22a824](https://github.com/staccx/bento/commit/f22a824))
* **styleguide:** Feature load off for stylleguide. Good start ([eb19b82](https://github.com/staccx/bento/commit/eb19b82))
* **styleguide:** Menu resolving. ([9d57e29](https://github.com/staccx/bento/commit/9d57e29))
* **styleguide:** Moved widthTab to own component and to header ([6b7c483](https://github.com/staccx/bento/commit/6b7c483))
* **styleguide:** New tabs ([8ea5ea7](https://github.com/staccx/bento/commit/8ea5ea7))
* **styleguide:** now supporting the shape proptype ([f8ebe87](https://github.com/staccx/bento/commit/f8ebe87))
* **styleguide:** Number custom prop! RadioPill > Select ([ad2249e](https://github.com/staccx/bento/commit/ad2249e))
* **styleguide:** prepare for showing rendered html ([3367e33](https://github.com/staccx/bento/commit/3367e33))
* **styleguide:** renderExampleController ([2db49ca](https://github.com/staccx/bento/commit/2db49ca))
* **styleguide:** show imported themeProps ([42d0731](https://github.com/staccx/bento/commit/42d0731))
* **styleguide:** Showing result of html rendering the component. ([02c5fbb](https://github.com/staccx/bento/commit/02c5fbb))
* **styleguide:** Source component is now rendered ([fcf1b90](https://github.com/staccx/bento/commit/fcf1b90))
* **styleguide:** Splitting tab for different views into seperate components ([b4b2c0f](https://github.com/staccx/bento/commit/b4b2c0f))
* **styleguide:** start on CustomProps-component seperate ([50e5c00](https://github.com/staccx/bento/commit/50e5c00))
* **styleguide:** Started working on own documentation ([a7c84b1](https://github.com/staccx/bento/commit/a7c84b1))
* **styleguide:** String custom props. Wrapper preview ([43fa4ce](https://github.com/staccx/bento/commit/43fa4ce))
* **styleguide:** styling of Tables ([6d677a8](https://github.com/staccx/bento/commit/6d677a8))
* **styleguide:** Sunsetting CustomProps. Using renderExampleController exclusively ([969a4ba](https://github.com/staccx/bento/commit/969a4ba))
* **styleguide:** typeToString ([8de2260](https://github.com/staccx/bento/commit/8de2260))
* **theme:** Added mapProps function ([cdf4cfd](https://github.com/staccx/bento/commit/cdf4cfd))
* **theme:** Added new componentss for theme providing ([8700fde](https://github.com/staccx/bento/commit/8700fde))
* **theme:** getThemeProp is now exported and can be used ([43a00f9](https://github.com/staccx/bento/commit/43a00f9))



## [6.1.1](https://github.com/staccx/bento/compare/v6.1.0...v6.1.1) (2018-07-05)


### Bug Fixes

* **code-generator:** missing scripts ([29697c0](https://github.com/staccx/bento/commit/29697c0))
* **developer-portal:** removed private flag ([21be46a](https://github.com/staccx/bento/commit/21be46a))


### Features

* **dealerpad:** Added support for pwa (icons etc.) ([ca178a1](https://github.com/staccx/bento/commit/ca178a1))
* **dealerpad:** Adjustments on grid + rejected status ([b302ee1](https://github.com/staccx/bento/commit/b302ee1))



# [6.1.0](https://github.com/staccx/bento/compare/v6.0.0...v6.1.0) (2018-07-05)


### Bug Fixes

* **dealerpad:** build & prepublish working ([c182d7f](https://github.com/staccx/bento/commit/c182d7f))
* **rollup-config:** added transform-runtime to babel plugins ([19fb70b](https://github.com/staccx/bento/commit/19fb70b))


### Features

* **dealerpad:** Added document-status + upload ([bded335](https://github.com/staccx/bento/commit/bded335))



# [6.0.0](https://github.com/staccx/bento/compare/v5.2.2...v6.0.0) (2018-07-04)


### Bug Fixes

* **base:** Fixed alert themePropsW ([9919118](https://github.com/staccx/bento/commit/9919118))
* **code-generator:** correct object format ([ddcd667](https://github.com/staccx/bento/commit/ddcd667))
* **developer-portal:** added dependency @staccx/code-generator ([119e301](https://github.com/staccx/bento/commit/119e301))
* **developer-portal:** Fixed fetching of existing choice ([965634f](https://github.com/staccx/bento/commit/965634f))
* **developer-portal:** missing tags conditional ([30547d6](https://github.com/staccx/bento/commit/30547d6))
* **developer-portal:** moved schema lookup to openapi.definitions ([8790f66](https://github.com/staccx/bento/commit/8790f66))
* **developer-portal:** openapi is data ([33a79d0](https://github.com/staccx/bento/commit/33a79d0))
* **developer-portal:** production build working ([a8aa2b2](https://github.com/staccx/bento/commit/a8aa2b2))
* **developer-portal:** Proper fix for language persistance on client ([0935527](https://github.com/staccx/bento/commit/0935527))
* **developer-portal:** updated to call generate on code generators ([8e95425](https://github.com/staccx/bento/commit/8e95425))
* **nordea-theme:** Nordea theme is now themepropped ([08159f1](https://github.com/staccx/bento/commit/08159f1))
* **theme:** Fixe registerstyle. Deleted old themes ([e4962a2](https://github.com/staccx/bento/commit/e4962a2))
* **theme:** Fixed themecompent handling themeprops ([f3bf748](https://github.com/staccx/bento/commit/f3bf748))
* **themes:** Styrke and Norefjell themes themepropped ([5a7b79a](https://github.com/staccx/bento/commit/5a7b79a))


### Features

* **base:** Added portal-component ([d6fbcca](https://github.com/staccx/bento/commit/d6fbcca))
* **base:** Added Tag-component ([14561af](https://github.com/staccx/bento/commit/14561af))
* **base:** Checkbox ThemeProps ([2f14f6b](https://github.com/staccx/bento/commit/2f14f6b))
* **base:** CompanyInput ThemeProps ([ee2ef91](https://github.com/staccx/bento/commit/ee2ef91))
* **base:** Expand + ThemeProps = true ([231b628](https://github.com/staccx/bento/commit/231b628))
* **base:** Input + ThemeProps ([b7e77b5](https://github.com/staccx/bento/commit/b7e77b5))
* **base:** Label + Themeprops ([01def06](https://github.com/staccx/bento/commit/01def06))
* **base:** Legend + themeprops ([bf2dbd1](https://github.com/staccx/bento/commit/bf2dbd1))
* **base:** PostalCode + ThemeProps. Removed CompanyInputStyles ([a1bb5a0](https://github.com/staccx/bento/commit/a1bb5a0))
* **base:** PostalCodeInput now has an onChange event. Select option wrapper now has max-height ([4e37963](https://github.com/staccx/bento/commit/4e37963))
* **base:** ProgressBar ThemePropified ([5b7472c](https://github.com/staccx/bento/commit/5b7472c))
* **base:** RadioButton + ThemeProps ([5a88711](https://github.com/staccx/bento/commit/5a88711))
* **base:** RadioPill(Item) + ThemeProps ([c650cd2](https://github.com/staccx/bento/commit/c650cd2))
* **base:** Rest ThemePropped ([be5ca2a](https://github.com/staccx/bento/commit/be5ca2a))
* **base:** Select themeprops ([c13c2d7](https://github.com/staccx/bento/commit/c13c2d7))
* **base:** SelectSimple ThemeProps ([adac0ac](https://github.com/staccx/bento/commit/adac0ac))
* **base:** Slider themeprops ([ab4ffe4](https://github.com/staccx/bento/commit/ab4ffe4))
* **base:** ThemeProps + Keyfigures ([19cd31a](https://github.com/staccx/bento/commit/19cd31a))
* **base:** ThemeProps + Loading ([685d9f6](https://github.com/staccx/bento/commit/685d9f6))
* **base:** ThemeProps + SliderKeyboardInput ([f247f96](https://github.com/staccx/bento/commit/f247f96))
* **base:** ThemeProps Donut ([89fd8b7](https://github.com/staccx/bento/commit/89fd8b7))
* **base:** ThemeProps Fraction ([8cd1e78](https://github.com/staccx/bento/commit/8cd1e78))
* **base:** ThemeProps Odometer ([2e628c1](https://github.com/staccx/bento/commit/2e628c1))
* **bento:** new package rollup-config ([e025125](https://github.com/staccx/bento/commit/e025125))
* **code-generation:** added example json requestBody to body ([c4668b5](https://github.com/staccx/bento/commit/c4668b5))
* **code-generation:** added parameters ([fc4664f](https://github.com/staccx/bento/commit/fc4664f))
* **code-generation:** prettier js ([a2f8860](https://github.com/staccx/bento/commit/a2f8860))
* **code-generation:** url from servers ([2cd6777](https://github.com/staccx/bento/commit/2cd6777))
* **dealerpad:** Added chat ([b435963](https://github.com/staccx/bento/commit/b435963))
* **dealerpad:** Added contact-block ([cdb5ae8](https://github.com/staccx/bento/commit/cdb5ae8))
* **dealerpad:** Added description to loan ([113e09d](https://github.com/staccx/bento/commit/113e09d))
* **dealerpad:** added menu ([c528ecf](https://github.com/staccx/bento/commit/c528ecf))
* **dealerpad:** Added my-sales-page with search ([a784ca5](https://github.com/staccx/bento/commit/a784ca5))
* **dealerpad:** added sales to my sales ([3d5cbc6](https://github.com/staccx/bento/commit/3d5cbc6))
* **dealerpad:** adjustments on chat ([b301d9d](https://github.com/staccx/bento/commit/b301d9d))
* **dealerpad:** basic layout on case ([4390b36](https://github.com/staccx/bento/commit/4390b36))
* **dealerpad:** cleanup ([611d4dc](https://github.com/staccx/bento/commit/611d4dc))
* **dealerpad:** Opprett ny sak har ikoner og Portal-ikonet ([c24fe75](https://github.com/staccx/bento/commit/c24fe75))
* **dealerpad:** Progress on case ([fbbb007](https://github.com/staccx/bento/commit/fbbb007))
* **dealerpad:** routes + menu from an object ([6b21730](https://github.com/staccx/bento/commit/6b21730))
* **dealerpad:** start on new case. Added a bunch of icons to norde-theme ([83cc519](https://github.com/staccx/bento/commit/83cc519))
* **developer-portal:** Added config overrides ([a7b033b](https://github.com/staccx/bento/commit/a7b033b))
* **developer-portal:** added fundu-api ([4e13ad3](https://github.com/staccx/bento/commit/4e13ad3))
* **developer-portal:** Language can now be changed ([f010ca0](https://github.com/staccx/bento/commit/f010ca0))
* **fundu-theme:** Added disable state to button. Fixed PostalCodeInput width. ([e218f29](https://github.com/staccx/bento/commit/e218f29))
* **loan-process:** Made alterations to accommodate new features ([fee2557](https://github.com/staccx/bento/commit/fee2557))
* **nordea:** oppdatering av farger ([99d1f31](https://github.com/staccx/bento/commit/99d1f31))
* **plop:** Added module possibility ([187b2d1](https://github.com/staccx/bento/commit/187b2d1))
* **templates:** Added new template, App. Use plop SApp to generate ([9f9fb15](https://github.com/staccx/bento/commit/9f9fb15))
* **theme:** Themify can now take themeProp object ([5a65511](https://github.com/staccx/bento/commit/5a65511))
* **themes:** Aprila & Fundu themes themepropped ([90ad981](https://github.com/staccx/bento/commit/90ad981))



## [5.2.2](https://github.com/staccx/bento/compare/v5.2.1...v5.2.2) (2018-06-29)


### Bug Fixes

* **loan-process:** Fixed issue with one field using event instead of true/false as value ([3d76ae4](https://github.com/staccx/bento/commit/3d76ae4))



## [5.2.1](https://github.com/staccx/bento/compare/v5.1.0...v5.2.1) (2018-06-29)


### Bug Fixes

* **base:** Bumped dependencies! ([2e89066](https://github.com/staccx/bento/commit/2e89066))
* **base:** prismjs can now render java and csharp ([15f704a](https://github.com/staccx/bento/commit/15f704a))
* **base:** Select buttons now have correct types ([498b352](https://github.com/staccx/bento/commit/498b352))
* **base:** Table now only sends <tr> to render props. no longer each td ([1ee6e48](https://github.com/staccx/bento/commit/1ee6e48))
* **developer-portal:** Fixed git conflict issue ([dec9ea7](https://github.com/staccx/bento/commit/dec9ea7))
* **developer-portal:** provided required prop language  for CodeRenderer ([14eb6cf](https://github.com/staccx/bento/commit/14eb6cf))


### Features

* **code-generation:** developer portal now generates code from openapi ([253760d](https://github.com/staccx/bento/commit/253760d))
* **code-generation:** moved functionality to module code-generator ([cc4f8c4](https://github.com/staccx/bento/commit/cc4f8c4))
* **developer-portal:** ApiReference now shows dynamic data ([58a1a58](https://github.com/staccx/bento/commit/58a1a58))
* **developer-portal:** Updated menu to use openapi ([c5cf9e8](https://github.com/staccx/bento/commit/c5cf9e8))
* **loan-process:** Split calculator and personalia ([ed7e4a3](https://github.com/staccx/bento/commit/ed7e4a3))
* **plop:** Added basic plopfile configuration. Needs thought and execution to be good ([2925d77](https://github.com/staccx/bento/commit/2925d77))



# [5.1.0](https://github.com/staccx/bento/compare/v5.0.0...v5.1.0) (2018-06-28)


### Bug Fixes

* **base:** Fixed build script ([98a02c4](https://github.com/staccx/bento/commit/98a02c4))
* **base:** Table is now themified ([0b48a5a](https://github.com/staccx/bento/commit/0b48a5a))


### Features

* **base:** Added component codeRenderer ([26e795f](https://github.com/staccx/bento/commit/26e795f))
* **base:** Added component Table ([376a13e](https://github.com/staccx/bento/commit/376a13e))
* **base:** Added new component Fetch ([cfc6453](https://github.com/staccx/bento/commit/cfc6453))
* **base:** Fetch now has mapData function ([d51c4a2](https://github.com/staccx/bento/commit/d51c4a2))
* **developer-portal:** Added SchemaProvider to app ([a6a31f2](https://github.com/staccx/bento/commit/a6a31f2))
* **soy:** Meet Soy, you dependency admin ([3d31f9b](https://github.com/staccx/bento/commit/3d31f9b))



# [5.0.0](https://github.com/staccx/bento/compare/v4.24.0...v5.0.0) (2018-06-26)


### Features

* **savings-advisor:** Updated app name ([98cb570](https://github.com/staccx/bento/commit/98cb570))
* Updated to current version of bento ([ed47a99](https://github.com/staccx/bento/commit/ed47a99))
* **developer-portal:** Added csharp language support and fixed theme ([e6115e4](https://github.com/staccx/bento/commit/e6115e4))
* **developer-portal:** Added java-okHTTP language support ([cba7ba9](https://github.com/staccx/bento/commit/cba7ba9))
* **styleguide:** Added start of CodeRenderer ([3491e1a](https://github.com/staccx/bento/commit/3491e1a))



# [4.24.0](https://github.com/staccx/bento/compare/v4.23.0...v4.24.0) (2018-06-22)


### Features

* **base:** Added maxItems, better filtering and null handling ([f99fab3](https://github.com/staccx/bento/commit/f99fab3))



# [4.23.0](https://github.com/staccx/bento/compare/v4.22.3...v4.23.0) (2018-06-22)


### Features

* **utils:** Added new function stringIncludes to ponyfill usages of string comparison ([3a2ce02](https://github.com/staccx/bento/commit/3a2ce02))



## [4.22.3](https://github.com/staccx/bento/compare/v4.22.2...v4.22.3) (2018-06-21)



## [4.22.2](https://github.com/staccx/bento/compare/v4.21.2...v4.22.2) (2018-06-21)


### Bug Fixes

* **base:** Pagination fixes ([909e33a](https://github.com/staccx/bento/commit/909e33a))
* **base/pagination:** fixed nextPage and previousPage ([079707b](https://github.com/staccx/bento/commit/079707b))


### Features

* **base:** Added start of Pagination component ([ee78c09](https://github.com/staccx/bento/commit/ee78c09))
* **developer-portal:** 💅 ([10aa61e](https://github.com/staccx/bento/commit/10aa61e))
* **developer-portal:** First layout adjustments ([e12588f](https://github.com/staccx/bento/commit/e12588f))



## [4.21.2](https://github.com/staccx/bento/compare/v4.21.1...v4.21.2) (2018-06-18)



## [4.21.1](https://github.com/staccx/bento/compare/v4.21.0...v4.21.1) (2018-06-15)



# [4.21.0](https://github.com/staccx/bento/compare/v4.20.4...v4.21.0) (2018-06-15)


### Bug Fixes

* **bento:** variant passed to LayoutItem ([11ec006](https://github.com/staccx/bento/commit/11ec006))


### Features

* **base:** Added loader-komponent ([f37540f](https://github.com/staccx/bento/commit/f37540f))
* **developer-portal:** Added further rendering of openapi ([ecd3893](https://github.com/staccx/bento/commit/ecd3893))
* **developer-portal:** Support for tags ([dbfae04](https://github.com/staccx/bento/commit/dbfae04))
* **utils:** Added deepfind to utils# ([8a69b30](https://github.com/staccx/bento/commit/8a69b30))
* **utils:** deepfind can now specify separator ([98496a1](https://github.com/staccx/bento/commit/98496a1))



## [4.20.4](https://github.com/staccx/bento/compare/v4.20.3...v4.20.4) (2018-06-11)


### Bug Fixes

* **i18n:** Texts should not be required as they are often fetched at runtime ([07d3f8e](https://github.com/staccx/bento/commit/07d3f8e))



## [4.20.3](https://github.com/staccx/bento/compare/v4.20.2...v4.20.3) (2018-06-11)


### Bug Fixes

* **i18n:** i18n no longer complains about not having texts. Removed dep to @staccx/base in export ([8991fd3](https://github.com/staccx/bento/commit/8991fd3))
* **i18n:** Removed consolling ([053a394](https://github.com/staccx/bento/commit/053a394))
* Added valid auth token to Logo docs ([86fb993](https://github.com/staccx/bento/commit/86fb993))


### Features

* **developer-portal:** Started work on rendering openapi docs ([b1a23fa](https://github.com/staccx/bento/commit/b1a23fa))



## [4.20.2](https://github.com/staccx/bento/compare/v4.20.1...v4.20.2) (2018-06-08)


### Bug Fixes

* **loan-process:** Output fixed for loan-process ([75fdbdf](https://github.com/staccx/bento/commit/75fdbdf))



## [4.20.1](https://github.com/staccx/bento/compare/v4.20.0...v4.20.1) (2018-06-08)



# [4.20.0](https://github.com/staccx/bento/compare/v4.19.0...v4.20.0) (2018-06-08)


### Bug Fixes

* **base:** Select can now use placeHolderlabel for complee items ([1f43c59](https://github.com/staccx/bento/commit/1f43c59))


### Features

* **loan-process:** Calculator now works. Still a bit crazy on the validation ([f70edd5](https://github.com/staccx/bento/commit/f70edd5))



# [4.19.0](https://github.com/staccx/bento/compare/v4.18.0...v4.19.0) (2018-06-07)


### Features

* **base:** Select revamp ([70edc31](https://github.com/staccx/bento/commit/70edc31))
* **i18n:** Translated text now return as string if no renderProp is added ([72811d9](https://github.com/staccx/bento/commit/72811d9))



# [4.18.0](https://github.com/staccx/bento/compare/v4.17.0...v4.18.0) (2018-06-05)


### Features

* **i18n:** RYet another i18n implementation ([6cf41f7](https://github.com/staccx/bento/commit/6cf41f7))



# [4.17.0](https://github.com/staccx/bento/compare/v4.16.0...v4.17.0) (2018-06-05)



# [4.16.0](https://github.com/staccx/bento/compare/v4.15.2...v4.16.0) (2018-06-05)



## [4.15.2](https://github.com/staccx/bento/compare/v4.15.1...v4.15.2) (2018-06-05)



## [4.15.1](https://github.com/staccx/bento/compare/v4.14.0...v4.15.1) (2018-06-05)


### Bug Fixes

* **color:** Fixed test for opacity ([194a2ef](https://github.com/staccx/bento/commit/194a2ef))
* **color:** Made repo non public (npm package) ([6d2926a](https://github.com/staccx/bento/commit/6d2926a))
* **theme:** Fix issue with switching themes nnot working ([f9d9136](https://github.com/staccx/bento/commit/f9d9136))


### Features

* **property-value:** Added all google maps needed ([7028f7b](https://github.com/staccx/bento/commit/7028f7b))
* **property-value:** Added project. Changed module starter to include react-app-rewired ([28db607](https://github.com/staccx/bento/commit/28db607))
* **property-value:** Added some flair. Needs that magic touch, though ([f52c12d](https://github.com/staccx/bento/commit/f52c12d))
* **property-value:** Property value can now take data-attribute address as well ([f69207e](https://github.com/staccx/bento/commit/f69207e))



# [4.14.0](https://github.com/staccx/bento/compare/v4.13.4...v4.14.0) (2018-06-03)


### Features

* **color:** Added new color lib ([017db2d](https://github.com/staccx/bento/commit/017db2d))



## [4.13.4](https://github.com/staccx/bento/compare/v4.13.3...v4.13.4) (2018-06-01)



## [4.13.3](https://github.com/staccx/bento/compare/v4.13.2...v4.13.3) (2018-06-01)



## [4.13.2](https://github.com/staccx/bento/compare/v4.13.1...v4.13.2) (2018-06-01)


### Features

* **loan-process:** FUN-106 My orders will now longer render heading if empty array ([011bb5d](https://github.com/staccx/bento/commit/011bb5d))



## [4.13.1](https://github.com/staccx/bento/compare/v4.13.0...v4.13.1) (2018-06-01)


### Bug Fixes

* **fundu-theme:** Label styles are now applied to all labels not just input labels ([c06d09d](https://github.com/staccx/bento/commit/c06d09d))
* **loan-process:** Now uses new theme syntax ([39fc5f8](https://github.com/staccx/bento/commit/39fc5f8))
* **theme:** Renamed webfont to webfonts ([dd20ecf](https://github.com/staccx/bento/commit/dd20ecf))


### Features

* **onboarding-pm:** Added filter to country list ([752842f](https://github.com/staccx/bento/commit/752842f))



# [4.13.0](https://github.com/staccx/bento/compare/v4.12.0...v4.13.0) (2018-06-01)


### Features

* **theme:** Theme is now properly immutable. Deprecated old functions(still work). ThemeProxyProvider can now set webfonts ([f2d704a](https://github.com/staccx/bento/commit/f2d704a))



# [4.12.0](https://github.com/staccx/bento/compare/v4.11.1...v4.12.0) (2018-05-31)


### Features

* **styrke:** Added styrke theme ([3da0f85](https://github.com/staccx/bento/commit/3da0f85))



## [4.11.1](https://github.com/staccx/bento/compare/v4.11.0...v4.11.1) (2018-05-31)


### Features

* **base:** PostalCodeInput now fetches and displays results. Exported ([a3a1280](https://github.com/staccx/bento/commit/a3a1280))



# [4.11.0](https://github.com/staccx/bento/compare/v4.10.0...v4.11.0) (2018-05-30)


### Bug Fixes

* **bank-in-a-box:** Switched theme sources. Now uses the packages generated ([6e45b05](https://github.com/staccx/bento/commit/6e45b05))



# [4.10.0](https://github.com/staccx/bento/compare/v4.9.0...v4.10.0) (2018-05-30)


### Bug Fixes

* Fixed formatting not using correct format after date-fns update. bank-in-a-box now is scoped ([a278e30](https://github.com/staccx/bento/commit/a278e30))


### Features

* **aprila & norefjell:** Added new themes ([bfbc5c6](https://github.com/staccx/bento/commit/bfbc5c6))



# [4.9.0](https://github.com/staccx/bento/compare/v4.8.1...v4.9.0) (2018-05-30)


### Bug Fixes

* **base:** Checkbox no longer has themeVariant prop. Changed to variant as everywhere else ([16cc2de](https://github.com/staccx/bento/commit/16cc2de))


### Features

* **base:** Started work on postalCodeInput. Added utils package ([c7642db](https://github.com/staccx/bento/commit/c7642db))



## [4.8.1](https://github.com/staccx/bento/compare/v4.8.0...v4.8.1) (2018-05-29)


### Bug Fixes

* **loan-process:** Fixed default spouse value ([a32f24c](https://github.com/staccx/bento/commit/a32f24c))



# [4.8.0](https://github.com/staccx/bento/compare/v4.7.0...v4.8.0) (2018-05-29)



# [4.7.0](https://github.com/staccx/bento/compare/v4.6.3...v4.7.0) (2018-05-29)



## [4.6.3](https://github.com/staccx/bento/compare/v4.6.2...v4.6.3) (2018-05-29)



## [4.6.2](https://github.com/staccx/bento/compare/v4.6.1...v4.6.2) (2018-05-29)


### Bug Fixes

* **fundu-theme:** Fixed typo. Consider flow? ([08b8060](https://github.com/staccx/bento/commit/08b8060))



## [4.6.1](https://github.com/staccx/bento/compare/v4.6.0...v4.6.1) (2018-05-29)


### Bug Fixes

* **fundu-theme:** Was importing entire base bc import string error ([cb91e11](https://github.com/staccx/bento/commit/cb91e11))



# [4.6.0](https://github.com/staccx/bento/compare/v4.5.2...v4.6.0) (2018-05-29)


### Bug Fixes

* **onboaring-pm:** ClientInfo now sets origin and has callbacks for other checkboxes ([85ae1bc](https://github.com/staccx/bento/commit/85ae1bc))


### Features

* **loan-process:** Added PersonalFinance ([7e2b7c2](https://github.com/staccx/bento/commit/7e2b7c2))



## [4.5.2](https://github.com/staccx/bento/compare/v4.5.1...v4.5.2) (2018-05-28)



## [4.5.1](https://github.com/staccx/bento/compare/v4.5.0...v4.5.1) (2018-05-28)


### Bug Fixes

* **loan-process:** Removed referenced to deleted Complete ([42b9e1d](https://github.com/staccx/bento/commit/42b9e1d))



# [4.5.0](https://github.com/staccx/bento/compare/v4.4.2...v4.5.0) (2018-05-28)


### Features

* **formatting:** Formatting now implements own createNumberMask ([54358a8](https://github.com/staccx/bento/commit/54358a8))



## [4.4.2](https://github.com/staccx/bento/compare/v4.4.1...v4.4.2) (2018-05-28)


### Bug Fixes

* **loan-process:** PresentOffer variant for Select now correct ([4781371](https://github.com/staccx/bento/commit/4781371))


### Features

* **formatting:** Now has code coverage ([5c44b64](https://github.com/staccx/bento/commit/5c44b64))



## [4.4.1](https://github.com/staccx/bento/compare/v4.4.0...v4.4.1) (2018-05-28)



# [4.4.0](https://github.com/staccx/bento/compare/v4.1.0...v4.4.0) (2018-05-28)


### Bug Fixes

* **loan-process:** Fixed issue with radio disappearing if sum was changed to max ([bbd7304](https://github.com/staccx/bento/commit/bbd7304))
* Added iterator keys. Removed console log ([ade9d1d](https://github.com/staccx/bento/commit/ade9d1d))
* **base:** Added default theme to ThemeWrapper ([3da22dc](https://github.com/staccx/bento/commit/3da22dc))
* **base:** HiddenVisually is now imported directly instead of via polished index ([147543e](https://github.com/staccx/bento/commit/147543e))
* **developer-portal:** Fixed issue with developer portal not working ([28aa55c](https://github.com/staccx/bento/commit/28aa55c))
* **fundu-theme:** Fixed export for fundu-theme. ([16a8af5](https://github.com/staccx/bento/commit/16a8af5))
* **loan-process:** Loan-process now uses formatting lib ([c1da6c7](https://github.com/staccx/bento/commit/c1da6c7))
* **loan-process:** SetAccountNumber now renders ([eb51b31](https://github.com/staccx/bento/commit/eb51b31))
* **loan-process:** Sign now shows correct sign count. Cleaned up rendering ([03657f3](https://github.com/staccx/bento/commit/03657f3))
* **loan-process:** Validation in RegisterSigners ([9215cab](https://github.com/staccx/bento/commit/9215cab))
* Sign now has working example ([0f79386](https://github.com/staccx/bento/commit/0f79386))
* **loan-process:** Now renders ([c1b7343](https://github.com/staccx/bento/commit/c1b7343))
* **loan-process:** Work on Sign ([435e5fa](https://github.com/staccx/bento/commit/435e5fa))
* RegisterSigners is now working albeit with very stern validation¨ ([5273e37](https://github.com/staccx/bento/commit/5273e37))


### Features

* **base:** Added build script to allow for exporting of all components individually. Does not affect current export ([92009e7](https://github.com/staccx/bento/commit/92009e7))
* **base:** Logo is now exported ([ba16e82](https://github.com/staccx/bento/commit/ba16e82))
* **formatting:** Added truncate ([2244a19](https://github.com/staccx/bento/commit/2244a19))
* **loan-process:** Loan process now builds as proper module ([2b20c57](https://github.com/staccx/bento/commit/2b20c57))
* **loan-process:** PresentOffer defaultProps ([e5fa9ac](https://github.com/staccx/bento/commit/e5fa9ac))
* **loan-process:** PresentOffer now has better period handling and styling. Plus cacluations ([f278c64](https://github.com/staccx/bento/commit/f278c64))
* **loan-process:** PresentOffer will now calculate monthly costs ([7c84de4](https://github.com/staccx/bento/commit/7c84de4))
* **loan-process:** RegisterSigners defaultProps ([55f4ff1](https://github.com/staccx/bento/commit/55f4ff1))
* **loan-process:** SetAccountNumber  and COmplete  defaultProps ([1a37aa8](https://github.com/staccx/bento/commit/1a37aa8))
* **loan-process:** Sign defaultProps ([8a1f6c9](https://github.com/staccx/bento/commit/8a1f6c9))
* 'Fixed' Register-Signers. Added new formatting method ([899e143](https://github.com/staccx/bento/commit/899e143))
* Added logo component ([ab7c6ef](https://github.com/staccx/bento/commit/ab7c6ef))
* Complete is complete ([ec71989](https://github.com/staccx/bento/commit/ec71989))
* Getting ready for publish ([aa56b67](https://github.com/staccx/bento/commit/aa56b67))
* PresentOffer (formerly ApplicationFormOffer) now works ([2db0102](https://github.com/staccx/bento/commit/2db0102))
* **onboarding:** Added onboarding for privat marked ([2e720e1](https://github.com/staccx/bento/commit/2e720e1))
* **templates:** Module starter pack now has CRA ([2c4082c](https://github.com/staccx/bento/commit/2c4082c))



# [4.1.0](https://github.com/staccx/bento/compare/v4.0.1...v4.1.0) (2018-05-15)


### Bug Fixes

* **cli:** Cli now builds correctly ([3e220ed](https://github.com/staccx/bento/commit/3e220ed))
* abbreviate is now exported ([c8476c9](https://github.com/staccx/bento/commit/c8476c9))
* Added formatDateDistance to export ([63d1004](https://github.com/staccx/bento/commit/63d1004))
* Fixed formatting not building bc of jest ([7c23e02](https://github.com/staccx/bento/commit/7c23e02))
* stage 0 ([01a0aa2](https://github.com/staccx/bento/commit/01a0aa2))


### Features

* **formatting:** Added new function removeWhiteSpace ([799f431](https://github.com/staccx/bento/commit/799f431))
* Added date formatting and tests ([4c4044c](https://github.com/staccx/bento/commit/4c4044c))
* Added isNumber function and tests ([3bf4600](https://github.com/staccx/bento/commit/3bf4600))
* Added new function, abbreviateCurrency ([e6933d4](https://github.com/staccx/bento/commit/e6933d4))
* Added new project for client Fundu: Loan-Process ([e4206e2](https://github.com/staccx/bento/commit/e4206e2))
* MOved from bento ([45eb4d1](https://github.com/staccx/bento/commit/45eb4d1))
* Moved math into own package ([633f4d3](https://github.com/staccx/bento/commit/633f4d3))



## [4.0.1](https://github.com/staccx/bento/compare/v4.0.0...v4.0.1) (2018-05-15)



# [4.0.0](https://github.com/staccx/bento/compare/v3.9.1...v4.0.0) (2018-05-15)


### Bug Fixes

* Fixed styleguide-etst ([fb90ad4](https://github.com/staccx/bento/commit/fb90ad4))


### Features

* Added new projects ([2efe64b](https://github.com/staccx/bento/commit/2efe64b))
* Changed how theme components are used in theme. ([06ad002](https://github.com/staccx/bento/commit/06ad002))



## [3.9.1](https://github.com/staccx/bento/compare/v3.9.0...v3.9.1) (2018-05-10)


### Bug Fixes

* **theme:** Fix issue with fallback not being used if themecomponent had a registered variant ([37476d5](https://github.com/staccx/bento/commit/37476d5))



# [3.9.0](https://github.com/staccx/bento/compare/v3.7.3...v3.9.0) (2018-05-10)


### Features

* Fixed(?) issue with animations and other styled components dependent packages intefering with eachother ([4ce3cdc](https://github.com/staccx/bento/commit/4ce3cdc))
* ThemeComponent now depends on variants. ([a8da45a](https://github.com/staccx/bento/commit/a8da45a))



## [3.7.3](https://github.com/staccx/bento/compare/v3.7.2...v3.7.3) (2018-05-08)


### Bug Fixes

* **base:** Fixed remnant of themeVariant (now variant). Added object to valid child to radiobutton ([cc038ba](https://github.com/staccx/bento/commit/cc038ba))



## [3.7.2](https://github.com/staccx/bento/compare/v3.7.1...v3.7.2) (2018-05-08)


### Bug Fixes

* **base:** Fixed issue with ItemGroup not using prop spacing correctly ([77dad03](https://github.com/staccx/bento/commit/77dad03))



## [3.7.1](https://github.com/staccx/bento/compare/v3.7.1-0...v3.7.1) (2018-05-08)


### Bug Fixes

* ExpandlistButton props now sent to button ([641a7f1](https://github.com/staccx/bento/commit/641a7f1))
* Fixed CompanyInput not sending set when removing. Fixed issue with title not being sent to btn ([e7f3426](https://github.com/staccx/bento/commit/e7f3426))



## [3.7.1-0](https://github.com/staccx/bento/compare/v3.7.0-0...v3.7.1-0) (2018-05-07)


### Bug Fixes

* Added files ([4e148dd](https://github.com/staccx/bento/commit/4e148dd))


### Features

* **base:** Added initial json schema impl ([e7e43cc](https://github.com/staccx/bento/commit/e7e43cc))



# [3.7.0-0](https://github.com/staccx/bento/compare/v3.6.0...v3.7.0-0) (2018-05-07)


### Bug Fixes

* Fixed issue with @staccx/animations not working with rest ([9efef39](https://github.com/staccx/bento/commit/9efef39))



# [3.6.0](https://github.com/staccx/bento/compare/v3.4.0...v3.6.0) (2018-05-06)


### Bug Fixes

* Fixed issue with base reset ([cce9e3d](https://github.com/staccx/bento/commit/cce9e3d))
* Resets ([e325f5a](https://github.com/staccx/bento/commit/e325f5a))


### Features

* **styleguide:** Added automatic creation of new fixtures. ([f7113b5](https://github.com/staccx/bento/commit/f7113b5))
* Added new styleguide project ([e280d08](https://github.com/staccx/bento/commit/e280d08))



# [3.4.0](https://github.com/staccx/bento/compare/v3.3.0...v3.4.0) (2018-05-04)


### Bug Fixes

* **base:** ThemeWrapper will now apply resets ([33ae303](https://github.com/staccx/bento/commit/33ae303))
* **theme:** Fallback null for ThemeComponent now works ([5362d1b](https://github.com/staccx/bento/commit/5362d1b))
* Removed test usage of ThemeComponent. Added ThemeComponent for logo rendering ([7985b1c](https://github.com/staccx/bento/commit/7985b1c))


### Features

* **base:** Resets now take theme ([7bbfb15](https://github.com/staccx/bento/commit/7bbfb15))
* Decimal in Account is now tiny ([43411fe](https://github.com/staccx/bento/commit/43411fe))
* Showed how ThemeComponent can be used to change entire components ([9f7ac9a](https://github.com/staccx/bento/commit/9f7ac9a))



# [3.3.0](https://github.com/staccx/bento/compare/v3.2.0...v3.3.0) (2018-05-03)


### Bug Fixes

* Fixed issue with injectGlobal not being applied > 1 times for each theme ([3e46941](https://github.com/staccx/bento/commit/3e46941))
* Fixed issue with styleguide not working ([029abfd](https://github.com/staccx/bento/commit/029abfd))


### Features

* Data is now properly fetch from mock ([13fd980](https://github.com/staccx/bento/commit/13fd980))



# [3.2.0](https://github.com/staccx/bento/compare/v3.1.0...v3.2.0) (2018-05-03)


### Bug Fixes

* Theme.addStyles now works as expected ([6fa731a](https://github.com/staccx/bento/commit/6fa731a))


### Features

* Added layout grids ([f8accaa](https://github.com/staccx/bento/commit/f8accaa))
* Exporting Theme from theme ([0f6ea21](https://github.com/staccx/bento/commit/0f6ea21))
* Grids now supported in theme ([ecce747](https://github.com/staccx/bento/commit/ecce747))
* Uses theme from base. Added vendor splitting ([639e755](https://github.com/staccx/bento/commit/639e755))



# [3.1.0](https://github.com/staccx/bento/compare/v3.0.1...v3.1.0) (2018-05-02)



## [3.0.1](https://github.com/staccx/bento/compare/v3.0.0...v3.0.1) (2018-05-02)


### Features

* Now works with theme ([d3295cc](https://github.com/staccx/bento/commit/d3295cc))



# [3.0.0](https://github.com/staccx/bento/compare/v2.9.0...v3.0.0) (2018-05-02)


### Features

* BaseTheme is back in the export ([9ed1cd8](https://github.com/staccx/bento/commit/9ed1cd8))



# [2.9.0](https://github.com/staccx/bento/compare/v2.8.1...v2.9.0) (2018-05-02)


### Bug Fixes

* Removed x button ([9fcb645](https://github.com/staccx/bento/commit/9fcb645))


### Features

* Account data is now in store ([66b4334](https://github.com/staccx/bento/commit/66b4334))
* Added dummy api ([ba7388b](https://github.com/staccx/bento/commit/ba7388b))
* Added empty states ([389cb2a](https://github.com/staccx/bento/commit/389cb2a))
* Added react-app-rewired and decorator bindings ([76e3886](https://github.com/staccx/bento/commit/76e3886))
* Added store ([27ba264](https://github.com/staccx/bento/commit/27ba264))
* Initial commit ([a01d813](https://github.com/staccx/bento/commit/a01d813))



## [2.8.1](https://github.com/staccx/bento/compare/v2.8.0...v2.8.1) (2018-04-26)


### Bug Fixes

* Peer dep fix ([7944a1a](https://github.com/staccx/bento/commit/7944a1a))



# [2.8.0](https://github.com/staccx/bento/compare/v2.7.0...v2.8.0) (2018-04-26)


### Features

* Using new version of theme ([b69de1e](https://github.com/staccx/bento/commit/b69de1e))



# [2.7.0](https://github.com/staccx/bento/compare/v2.6.0...v2.7.0) (2018-04-26)


### Features

* **base:** Added new component NationalIdInput. Only supports norwegian atm ([97027bd](https://github.com/staccx/bento/commit/97027bd))



# [2.6.0](https://github.com/staccx/bento/compare/v2.5.0...v2.6.0) (2018-04-26)


### Features

* **base:** Added export of SliderKeyboardInputStyles ([8092fb5](https://github.com/staccx/bento/commit/8092fb5))



# [2.5.0](https://github.com/staccx/bento/compare/v2.4.0...v2.5.0) (2018-04-25)


### Bug Fixes

* Added missing SimpleSelectStyles. ([c74b73d](https://github.com/staccx/bento/commit/c74b73d))


### Features

* CompanyInput now usable with props ([ed0e6b7](https://github.com/staccx/bento/commit/ed0e6b7))



# [2.4.0](https://github.com/staccx/bento/compare/v2.3.1...v2.4.0) (2018-04-25)



## [2.3.1](https://github.com/staccx/bento/compare/v2.2.1...v2.3.1) (2018-04-25)


### Features

* AccountInput add to export# ([bb76138](https://github.com/staccx/bento/commit/bb76138))



## [2.2.1](https://github.com/staccx/bento/compare/v2.2.0...v2.2.1) (2018-04-24)



# [2.2.0](https://github.com/staccx/bento/compare/v2.1.1...v2.2.0) (2018-04-24)


### Bug Fixes

* Bumping theme dep ([4f10dc4](https://github.com/staccx/bento/commit/4f10dc4))



## [2.1.1](https://github.com/staccx/bento/compare/v2.1.0...v2.1.1) (2018-04-24)



# [2.1.0](https://github.com/staccx/bento/compare/v2.0.0...v2.1.0) (2018-04-24)


### Features

* Removed button style as export ([a88b93b](https://github.com/staccx/bento/commit/a88b93b))
* **base:** ButtonStyles are now exported as part of base ([b3af3f8](https://github.com/staccx/bento/commit/b3af3f8))
* Improved merging. Will now merge deep ([e9323d5](https://github.com/staccx/bento/commit/e9323d5))



# [2.0.0](https://github.com/staccx/bento/compare/v1.1.3...v2.0.0) (2018-04-24)


### Bug Fixes

* Checkbox now sends props to icon ([b9786b2](https://github.com/staccx/bento/commit/b9786b2))
* Fixed issue where basetheme was being mutated as new styles where being added ([dcdc7cb](https://github.com/staccx/bento/commit/dcdc7cb))
* Fixed missing imports and references ([dfb5e62](https://github.com/staccx/bento/commit/dfb5e62))
* Modal now also sends onClose when clicking esc ([f5e086c](https://github.com/staccx/bento/commit/f5e086c))
* Modal now works as expected. No longer opens when starting styleguide ([9608427](https://github.com/staccx/bento/commit/9608427))


### Features

* Actual commit with changes ([83f4b35](https://github.com/staccx/bento/commit/83f4b35))
* added convenience for color and font ([f2c14d0](https://github.com/staccx/bento/commit/f2c14d0))
* Added function 'wrapper' to fetch theme prop wrapper. Removed logging ([c1b4f3a](https://github.com/staccx/bento/commit/c1b4f3a))
* Added ThemeComponent for dynamic components ([3d13984](https://github.com/staccx/bento/commit/3d13984))
* Changed most calls to theme props ([0d44c44](https://github.com/staccx/bento/commit/0d44c44))
* Convenience methods for wrapper ([a06ed76](https://github.com/staccx/bento/commit/a06ed76))
* deleted deepfind function not used anywhere ([31402ad](https://github.com/staccx/bento/commit/31402ad))
* ExpandListItem icon is now themable ([767a2ce](https://github.com/staccx/bento/commit/767a2ce))
* Fixed companyInput. Themeable ([ff31d21](https://github.com/staccx/bento/commit/ff31d21))
* Initial commit ([bb38344](https://github.com/staccx/bento/commit/bb38344))
* Modal how has themable close button. Fixed name for ExpandListItem Icon ([1bf9965](https://github.com/staccx/bento/commit/1bf9965))
* Moved to convenience ([06c2935](https://github.com/staccx/bento/commit/06c2935))
* New function fontFamily ([52b193e](https://github.com/staccx/bento/commit/52b193e))
* new function targetSize. Convenience functions for spacing ([2dcd401](https://github.com/staccx/bento/commit/2dcd401))
* Removed withTheme function and the last of its remnants ([db1f0e7](https://github.com/staccx/bento/commit/db1f0e7))
* Rename galore ([a39b984](https://github.com/staccx/bento/commit/a39b984))
* Select is now themable ([9474956](https://github.com/staccx/bento/commit/9474956))
* Started work migrating to using @staccx/theme ([d008638](https://github.com/staccx/bento/commit/d008638))



## [1.1.3](https://github.com/staccx/bento/compare/v1.1.2...v1.1.3) (2018-04-09)


### Bug Fixes

* SliderKeyboardInput now handles blur and clamps value when focus is lost ([0f20cbd](https://github.com/staccx/bento/commit/0f20cbd))



## [1.1.2](https://github.com/staccx/bento/compare/v1.1.1...v1.1.2) (2018-04-09)


### Bug Fixes

* **base:** SliderKeyboardInput now removes whitespace in case of tmasking before setting value ([405be60](https://github.com/staccx/bento/commit/405be60))



## [1.1.1](https://github.com/staccx/bento/compare/v1.1.0...v1.1.1) (2018-04-09)


### Bug Fixes

* Fixed piechart. Removed some linting issues ([2a8ba09](https://github.com/staccx/bento/commit/2a8ba09))
* Piechart now also has spinner when loading ([8edb5d6](https://github.com/staccx/bento/commit/8edb5d6))


### Features

* **base:** SliderKeyboardInput now longer clamps value, in itext input, only in slider ([c8429c2](https://github.com/staccx/bento/commit/c8429c2))



# [1.1.0](https://github.com/staccx/bento/compare/v1.0.2...v1.1.0) (2018-04-03)


### Bug Fixes

* **base:** Fixed issue with LinkLIstItem href prop ([81cb132](https://github.com/staccx/bento/commit/81cb132))


### Features

* **base:** Replaced fetch from whatwg to isomorphic ([0e12d0b](https://github.com/staccx/bento/commit/0e12d0b))



## [1.0.2](https://github.com/staccx/bento/compare/v1.0.1...v1.0.2) (2018-03-30)



## [1.0.1](https://github.com/staccx/bento/compare/v0.21.0...v1.0.1) (2018-03-29)


### Bug Fixes

* Odometer type + input default prop error ([f1edab0](https://github.com/staccx/bento/commit/f1edab0))
* removed styles from export ([112fbe1](https://github.com/staccx/bento/commit/112fbe1))


### Features

* Updated api host ([c3442eb](https://github.com/staccx/bento/commit/c3442eb))
* **base:** Slider + SliderKeyboardInput + withTheme additions ([518130e](https://github.com/staccx/bento/commit/518130e))
* Changed deps to different x packages. Fixed fallback ([ba638e3](https://github.com/staccx/bento/commit/ba638e3))
* new theming solution ([e7c38b2](https://github.com/staccx/bento/commit/e7c38b2))



# [0.21.0](https://github.com/staccx/bento/compare/v0.20.0...v0.21.0) (2018-03-16)


### Features

* animations moved to own package ([407e68c](https://github.com/staccx/bento/commit/407e68c))



# [0.20.0](https://github.com/staccx/bento/compare/v0.19.0...v0.20.0) (2018-03-16)


### Features

* Added new lib, math ([c092eda](https://github.com/staccx/bento/commit/c092eda))
* extracted math and formatting into own packages elsewhere ([4948427](https://github.com/staccx/bento/commit/4948427))
* Math moved to own project ([1b49a03](https://github.com/staccx/bento/commit/1b49a03))



# [0.19.0](https://github.com/staccx/bento/compare/v0.18.1...v0.19.0) (2018-03-16)


### Bug Fixes

* Footer ([c19f361](https://github.com/staccx/bento/commit/c19f361))
* **fail:** Fail safe if no data ([225de71](https://github.com/staccx/bento/commit/225de71))


### Features

* backtest for shotgunchart ([8c4fdb5](https://github.com/staccx/bento/commit/8c4fdb5))
* colors ([49e560d](https://github.com/staccx/bento/commit/49e560d))
* Portfoliofilter now connected to data ([ce512f0](https://github.com/staccx/bento/commit/ce512f0))
* removed horizon in last step. ready ([42d6234](https://github.com/staccx/bento/commit/42d6234))
* sanityfied ([08d3b09](https://github.com/staccx/bento/commit/08d3b09))
* Settings ([4150cfd](https://github.com/staccx/bento/commit/4150cfd))



## [0.18.1](https://github.com/staccx/bento/compare/v0.17.0...v0.18.1) (2018-03-08)


### Bug Fixes

* Small improvements ([1d5fb62](https://github.com/staccx/bento/commit/1d5fb62))
* **api:** Horizon should default be 1 ([8ca2462](https://github.com/staccx/bento/commit/8ca2462))
* **chart:** Colors ([8c97bef](https://github.com/staccx/bento/commit/8c97bef))
* **instrument:** Selectedinstrument is now null ([c995492](https://github.com/staccx/bento/commit/c995492))
* **Risk:** Removed setState calls in Risk ([d48a2af](https://github.com/staccx/bento/commit/d48a2af))
* mock data savingsplan ([506faff](https://github.com/staccx/bento/commit/506faff))
* **Risk:** State is now set at mount in Risk ([fb20002](https://github.com/staccx/bento/commit/fb20002))
* **sort:** Portfolio is now sorted ([a0e5f55](https://github.com/staccx/bento/commit/a0e5f55))


### Features

* **api:** Connected to api ([42bd921](https://github.com/staccx/bento/commit/42bd921))
* **api:** Fallback ([8b90f09](https://github.com/staccx/bento/commit/8b90f09))
* **api:** Horizon can now be set ([5420327](https://github.com/staccx/bento/commit/5420327))
* **chart:** Updates not recreating. Also tooltip on ShotgunChart ([a63fbde](https://github.com/staccx/bento/commit/a63fbde))
* **experience:** Experience is now in the state ([3da54eb](https://github.com/staccx/bento/commit/3da54eb))
* **formatCurrency:** formatCurrency is now exported ([f4f2871](https://github.com/staccx/bento/commit/f4f2871))
* **Risk:** Labels can now be clicked ([d7f7c7b](https://github.com/staccx/bento/commit/d7f7c7b))



# [0.17.0](https://github.com/staccx/bento/compare/v0.16.0...v0.17.0) (2018-03-07)


### Bug Fixes

* **risk:** Fixed animation for wave ([3adc806](https://github.com/staccx/bento/commit/3adc806))



# [0.16.0](https://github.com/staccx/bento/compare/v0.15.1...v0.16.0) (2018-03-07)



## [0.15.1](https://github.com/staccx/bento/compare/v0.15.0...v0.15.1) (2018-03-06)


### Bug Fixes

* **base:** CurrencyInput no longer has default value nor suffix ([fdb2ca3](https://github.com/staccx/bento/commit/fdb2ca3))



# [0.15.0](https://github.com/staccx/bento/compare/v0.14.2...v0.15.0) (2018-03-06)


### Features

* **base:** Animations now exported ([2798b4f](https://github.com/staccx/bento/commit/2798b4f))
* **steps:** Added transitions ([02055bd](https://github.com/staccx/bento/commit/02055bd))
* Added deposit inputs ([fc93816](https://github.com/staccx/bento/commit/fc93816))
* CurrencyInput now works with both in/decrement buttons and custom input ([cbf6e16](https://github.com/staccx/bento/commit/cbf6e16))



## [0.14.2](https://github.com/staccx/bento/compare/v0.14.1...v0.14.2) (2018-03-05)


### Bug Fixes

* bump base + prop fix CurrencyInputSteppers ([6cb4512](https://github.com/staccx/bento/commit/6cb4512))
* CurrencyInput now fixed ([1601a79](https://github.com/staccx/bento/commit/1601a79))



## [0.14.1](https://github.com/staccx/bento/compare/v0.14.0...v0.14.1) (2018-03-05)


### Bug Fixes

* fixed issue with value being null ([ae90899](https://github.com/staccx/bento/commit/ae90899))


### Features

* **shotgun:** More control over lines ([3ad62db](https://github.com/staccx/bento/commit/3ad62db))



# [0.14.0](https://github.com/staccx/bento/compare/v0.11.0...v0.14.0) (2018-03-05)


### Bug Fixes

* **base:** Using v0.12.0 of base ([3885965](https://github.com/staccx/bento/commit/3885965))
* **currency:** Fixed issue with currency input and mask ([30ead90](https://github.com/staccx/bento/commit/30ead90))
* **pie:** Added colors ([c234765](https://github.com/staccx/bento/commit/c234765))
* **pie:** Pies can now be unselected ([59226d5](https://github.com/staccx/bento/commit/59226d5))


### Features

* **base:** ExpandListItem now heeds the expanded props after mounting ([55befc7](https://github.com/staccx/bento/commit/55befc7))
* **pie:** Added interaction to pie ([24a8fb4](https://github.com/staccx/bento/commit/24a8fb4))
* **piechart:** Added piechart ([99f3e2a](https://github.com/staccx/bento/commit/99f3e2a))
* **portfolio:** Added new component Portfolio. Added pie and PortfolioExpand into it. ([3e721ad](https://github.com/staccx/bento/commit/3e721ad))
* **steps:** Added navigator for steps and changed how rendering works ([ae4cfe5](https://github.com/staccx/bento/commit/ae4cfe5))



# [0.11.0](https://github.com/staccx/bento/compare/v0.10.0...v0.11.0) (2018-03-01)


### Bug Fixes

* **shotgun:** More work on shotgun ([beaa3eb](https://github.com/staccx/bento/commit/beaa3eb))
* Removed idea files ([b75cc67](https://github.com/staccx/bento/commit/b75cc67))


### Features

* **interpolation:** Added some functions to help with data ([641e3f6](https://github.com/staccx/bento/commit/641e3f6))
* **shotgun:** Added new chart. ([797da80](https://github.com/staccx/bento/commit/797da80))



# [0.10.0](https://github.com/staccx/bento/compare/v0.8.0...v0.10.0) (2018-03-01)


### Features

* **mobx:** Added mobx and store. ([a05e4f7](https://github.com/staccx/bento/commit/a05e4f7))
* **resets:** Resets can now be applied globally after base ([dbfb826](https://github.com/staccx/bento/commit/dbfb826))
* **routing:** Added routing ([96684f3](https://github.com/staccx/bento/commit/96684f3))
* **state:** Mobx provider defined ([411306b](https://github.com/staccx/bento/commit/411306b))
* CRA ran ([3e258c7](https://github.com/staccx/bento/commit/3e258c7))



# [0.8.0](https://github.com/staccx/bento/compare/v0.7.0...v0.8.0) (2018-02-27)


### Bug Fixes

* **fetch:** Replaced axios with fetch ([60d9c44](https://github.com/staccx/bento/commit/60d9c44))
* **rollup:** Axios being a bitch and reading json ([ad693e3](https://github.com/staccx/bento/commit/ad693e3))


### Features

* **fix:** Fixed issue with styled-components multiple instances in using projects. Fixed small issues. Deleted old lock files. Changed axios with fetch ([19ad0e9](https://github.com/staccx/bento/commit/19ad0e9))



# [0.7.0](https://github.com/staccx/bento/compare/v0.6.0...v0.7.0) (2018-02-22)


### Features

* **CompanyInput:** Added component CompanyInput ([b25248b](https://github.com/staccx/bento/commit/b25248b))



# [0.6.0](https://github.com/staccx/bento/compare/v0.5.0...v0.6.0) (2018-02-22)


### Features

* **PhoneInput:** Added component PhoneInput ([4899317](https://github.com/staccx/bento/commit/4899317))



# [0.5.0](https://github.com/staccx/bento/compare/v0.4.0...v0.5.0) (2018-02-22)


### Features

* **PhoneInput:** Added component PhoneInput ([f35aef9](https://github.com/staccx/bento/commit/f35aef9))



# [0.4.0](https://github.com/staccx/bento/compare/v0.3.0...v0.4.0) (2018-02-22)


### Bug Fixes

* **CurrencyInput:** Fixed mask package with no es6 export ([0fbac89](https://github.com/staccx/bento/commit/0fbac89))
* **Select:** Preliminary fix for select ([f391657](https://github.com/staccx/bento/commit/f391657))


### Features

* **CurrencyInput:** Added component CurrencyInput ([96c8229](https://github.com/staccx/bento/commit/96c8229))
* **styled:** Added babel plugin to show the name of the styled components ([888c157](https://github.com/staccx/bento/commit/888c157))



# [0.3.0](https://github.com/staccx/bento/compare/v0.2.1...v0.3.0) (2018-02-22)


### Features

* **Odometer:** Added Odometer component. ([3ef43e3](https://github.com/staccx/bento/commit/3ef43e3))



## [0.2.1](https://github.com/staccx/bento/compare/v0.1.6...v0.2.1) (2018-02-21)



## [0.1.6](https://github.com/staccx/bento/compare/v0.1.5...v0.1.6) (2018-02-20)


### Bug Fixes

* **slider:** stopCount now has correct context. ([e2bfc98](https://github.com/staccx/bento/commit/e2bfc98))



## [0.1.5](https://github.com/staccx/bento/compare/v0.1.4...v0.1.5) (2018-02-20)


### Features

* **slider:** Fixed math calculating percentage. Also fixed min and max not being sent to slider. Added math functions ([13f0d1d](https://github.com/staccx/bento/commit/13f0d1d))



## [0.1.4](https://github.com/staccx/bento/compare/v0.1.3...v0.1.4) (2018-02-20)


### Features

* **prettify:** Prettify on build ([0406e3f](https://github.com/staccx/bento/commit/0406e3f))
* **staging:** Added new project for staging components ([e5aa87d](https://github.com/staccx/bento/commit/e5aa87d))



## [0.1.3](https://github.com/staccx/bento/compare/v0.1.2...v0.1.3) (2018-02-12)


### Bug Fixes

* **extend:** Styles now working ([2090766](https://github.com/staccx/bento/commit/2090766))



## [0.1.2](https://github.com/staccx/bento/compare/v0.1.1...v0.1.2) (2018-02-12)


### Features

* **extend:** Component extending now works ([a5e9804](https://github.com/staccx/bento/commit/a5e9804))



## [0.1.1](https://github.com/staccx/bento/compare/v0.0.2...v0.1.1) (2018-02-12)


### Features

* **Button:** Exported button. ([7e5ee37](https://github.com/staccx/bento/commit/7e5ee37))
* **styleguide:** Now works with themes ([08efa41](https://github.com/staccx/bento/commit/08efa41))
* **theme:** BaseTheme added ([02d6dff](https://github.com/staccx/bento/commit/02d6dff))



## [0.0.2](https://github.com/staccx/bento/compare/v0.0.1...v0.0.2) (2018-02-09)


### Features

* **comps:** Added first version of components. ([2025659](https://github.com/staccx/bento/commit/2025659))



## [0.0.1](https://github.com/staccx/bento/compare/5a7b993...v0.0.1) (2018-02-09)


### Features

* **base:** Added base project ([13c0382](https://github.com/staccx/bento/commit/13c0382))
* **lerna:** Lerna init ([5a7b993](https://github.com/staccx/bento/commit/5a7b993))



