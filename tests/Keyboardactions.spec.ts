// Before using keyboard methods, you typically get the keyboard object via the page object:
 
const keyboard = page.keyboard;

//1. keyboard.down()
 
//Simulates pressing down a key without releasing it.
 
// Useful for key combinations (e.g., Ctrl + A).
 
//Example:
 
await keyboard.down('Control');
await keyboard.press('A');
await keyboard.up('Control');




 
 
//2. keyboard.up()
 
//Releases a key that was pressed using down().
 
//Should be paired with down() for combinations.
 
//Example:
 
await keyboard.down('Shift');
 
// some other key actions await keyboard.up('Shift');




 
//3. keyboard.press()
 
//Presses and releases a key instantly.
 
// Can simulate both single keys and key combinations (e.g., Control+A, Enter, etc.).
 
//Example:
 
await keyboard.press('Enter');
 
await keyboard.press('Control+A');






//4. keyboard.type()
 
//Types full strings one character at a time.
 
// Example:
 
await keyboard.type('Hello World!');
 
 



//5. keyboard.insertText(text: string)
 
// Directly inserts text into a focused input field.
 
// Does not trigger keydown, keyup, or keypress events.
 
// Faster and more reliable when event simulation is not needed.
 
//Example:
 
await keyboard.insertText('Fast text input!');
 







import(test, expect, Locator} from"@playwright/test"
test ("keyboard actions", async ({page}) =>
{
	await page.goto('https://testautomationpractice.blogspot.com/')
// 1. focus on input 1
	const submit1: Locator=page.locator('#input1')
	await submit1. focus ()       OR        await submiti.click()

// 2. Provide the input text
	await page.keyboard. insertText ("Apple")

// 3. Control A
	await page. keyboard. down ('Control')
	await page. keyboard. press ('A' ) 
	await page. keyboard. up ("Control")

// 4: Control C
	await page. keyboard. down ('Control')
	await page.keyboard. press('C")
	await page. keyboard. up('Control')

//5. Press the tab for two times
	await page, keyboard. press("Tab');
	await page. keyboard. press ('Tab' );

//6. Control V - paste the data into second input 
  await. page. keyboard. down ('Control')
	await page.keyboard. press (V')
	await page. keyboard. up( Control')

//7. Press the tab for two times 
	await page.keyboard. press ("Tab" )
	await page. keyboard. press ("Tab")

// 8. Control V - paste the data into third input
	await page.keyboard. down ('Control')
	await page. keyboard. press ('V')
	await page.keyboard. up('Control')
	await page. waitForTimeout (5000)
});







// Simple way

test. only("keyboard actions - simple way", async({page}) =>
{
	await page.goto(“https://testautomationpractice.blogspot.com/”)
// 1. Focus on input 1
	const1 submit1:Locator=page.locator(“#input1”)
	await submit1.focus()            // or await submit.click()

// 2. Provide the input text
	await page.keyboard.insertText(“Apple”)

// 3. Control A
	await page.keyboard.press(“Control+A”)

// 4. Control C
	await page.keyboard.press(“Control+C”)

// 5. Press the tab for two times
	await page.keyboard.press(“Tab”)
	await page.keyboard.press(“Tab”)

// 6. Control V - paste the data into second input
	await page.keyboard.press(Control+V)

// 7. Press the tab for two times
	await page.keyboard.press(“Tab”)
	await page.keyboard.press(“Tab”)

// 8. Control V - paste the data into second input
	await page.keyboard.press(Control+V)
	await page.waitforTimeout(5000)
});




