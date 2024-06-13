import { Given } from '@wdio/cucumber-framework'

Given('Debug', async function() {
    await driver.debug()
})

Given('I wait 5 seconds', async function() {
    await driver.pause(5000)
})
