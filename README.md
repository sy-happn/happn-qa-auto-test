
# HAPPN - QA Automation Test
Repository des tests automatisés
Ce projet utilise l'architecture "Features // Pages // Steps" écrit en TypeScript et Gherkin.

## Architecture

- Framework WebdriveriO `V8`
- Server Appium (port `4723`)
- Dossier `/tests` qui contient les tests automatisés
	- `/features/**` -> Scénarios écrit en Gherkin
	- `/pages/**` -> Représentation des écrans de l'application sous forme de "page"
	- `/steps/**` -> Steps des scénarios au format JavaScript

## Prérequis

- Appium `>=2.5`
- NodeJS `>=20`
- Xcode `>=15.2`
- Simulateur `iOS 17.4`
- Android Studio `Latest version`
- Emulateur `Android 14.0`

## Installation

```sh
npm install
```

## Run

```sh
npm run ios
```

## Android - Appium inspector capabilities

```json
{
  "deviceName": "emulator-5554",
  "disableWindowAnimation": "true",
  "automationName": "UiAutomator2",
  "platformName": "Android",
  "noReset": true
}
```

## iOS - Appium inspector capabilities

```json
{
  "deviceName": "iPhone 15",
  "platformVersion": "17.4",
  "automationName": "XCUITest",
  "platformName": "ios",
  "noReset": true
}
```
