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
 
 

