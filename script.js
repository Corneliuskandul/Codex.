
const xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "your_xml_file.xml", false);
xmlhttp.send();
const xmlDoc = xmlhttp.responseXML; 
const dataElements = xmlDoc.getElementsByTagName("data"); 
const dataContainer = document.getElementById("dataContainer");
for (let i = 0; i < dataElements.length; i++) {
  const dataItem = dataElements[i];
  const name = dataItem.getElementsByTagName("name")[0].textContent;
  const value = dataItem.getElementsByTagName("value")[0].textContent;

  const dataDiv = document.createElement("div");
  dataDiv.innerHTML = `<b>${name}:</b> ${value}`;
  dataContainer.appendChild(dataDiv);
}
// script.js
const xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "data.xml", false);
xmlhttp.send();
const xmlDoc = xmlhttp.responseXML;

const dataElements = xmlDoc.getElementsByTagName("item");
const dataContainer = document.getElementById("dataContainer");

for (let i = 0; i < dataElements.length; i++) {
  const dataItem = dataElements[i];
  const name = dataItem.getElementsByTagName("name")[0].textContent;
  const value = dataItem.getElementsByTagName("value")[0].textContent;

  const dataDiv = document.createElement("div");
  dataDiv.innerHTML = `<b>${name}:</b> ${value}`;
  dataContainer.appendChild(dataDiv);
}
function startTutorial() {
    alert("Welcome to the HTML tutorial! Let's get started!");
}
// Redirect the user to the learning page
document.getElementById('learnBtn').addEventListener('click', () => {
    window.location.href = 'learn.html';
});
// Get references to the buttons and content container
const learnBtn = document.getElementById('learnBtn');
const htmlBtn = document.getElementById('htmlBtn');
const cssBtn = document.getElementById('cssBtn');
const learnMoreButtons = document.getElementById('learnMoreButtons');
const contentContainer = document.getElementById('contentContainer');
const contentTitle = document.getElementById('contentTitle');
const contentText = document.getElementById('contentText');

// Show the "HTML" and "CSS" buttons when "Learn" is clicked
learnBtn.addEventListener('click', () => {
    learnMoreButtons.classList.remove('hidden');
    learnBtn.classList.add('hidden');
});

// Handle the HTML button click event
htmlBtn.addEventListener('click', () => {
    contentTitle.textContent = "HTML Document";
    contentText.textContent = `
<!-- HTML Document Example -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Example</title>
</head>
<body>
    <h1>Welcome to the HTML Document</h1>
    <p>This is a simple HTML structure with a heading and a paragraph.</p>
</body>
</html>
    `;
    contentContainer.classList.remove('hidden');
});

// Handle the CSS button click event
cssBtn.addEventListener('click', () => {
    contentTitle.textContent = "CSS Document";
    contentText.textContent = `
/* CSS Document Example */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

h1 {
    color: #3498db;
}

p {
    color: #2c3e50;
}
    `;
    contentContainer.classList.remove('hidden');
});
```
border-radius: 5px;
    text-align: left;
    font-family: "Courier New", Courier, monospace;
    color: #2c3e50;
}

/* Styling for the HTML and CSS code */
pre {
    white-space: pre-wrap;
    word-wrap: break-word;
}
```
// Get references to the buttons and content container
const learnBtn = document.getElementById('learnBtn');
const htmlBtn = document.getElementById('htmlBtn');
const cssBtn = document.getElementById('cssBtn');
const learnMoreButtons = document.getElementById('learnMoreButtons');
const contentContainer = document.getElementById('contentContainer');
const contentTitle = document.getElementById('contentTitle');
const contentText = document.getElementById('contentText');

// Show the "HTML" and "CSS" buttons when "Learn" is clicked
learnBtn.addEventListener('click', () => {
    learnMoreButtons.classList.remove('hidden');
    learnBtn.classList.add('hidden');
});

// Handle the HTML button click event
htmlBtn.addEventListener('click', () => {
    contentTitle.textContent = "HTML Document";
    contentText.textContent = `
<!-- HTML Document Example -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Example</title>
</head>
<body>
    <h1>Welcome to the HTML Document</h1>
    <p>This is a simple HTML structure with a heading and a paragraph.</p>
</body>
</html>
    `;
    contentContainer.classList.remove('hidden');
});

// Handle the CSS button click event
cssBtn.addEventListener('click', () => {
    contentTitle.textContent = "CSS Document";
    contentText.textContent = `
/* CSS Document Example */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

h1 {
    color: #3498db;
}

p {
    color: #2c3e50;
}
    `;
    contentContainer.classList.remove('hidden');
});
```

// Get references to the buttons and content container
const learnBtn = document.getElementById('learnBtn');
const htmlBtn = document.getElementById('htmlBtn');
const cssBtn = document.getElementById('cssBtn');
const learnMoreButtons = document.getElementById('learnMoreButtons');
const contentContainer = document.getElementById('contentContainer');
const contentTitle = document.getElementById('contentTitle');
const contentText = document.getElementById('contentText');

// Show the "HTML" and "CSS" buttons when "Learn" is clicked
learnBtn.addEventListener('click', () => {
    learnMoreButtons.classList.remove('hidden');
    learnBtn.classList.add('hidden');
});
// Handle the HTML button click event
htmlBtn.addEventListener('click', () => {
    contentTitle.textContent = "HTML Tutorial";
    contentText.innerHTML = `
    <h3>Introduction to HTML</h3>
    <p>HTML (HyperText Markup Language) is the standard language for creating web pages.</p>
    <p>Below is a basic structure of an HTML document:</p>
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;HTML Example&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Welcome to the HTML Document&lt;/h1&gt;
    &lt;p&gt;This is a simple HTML structure with a heading and a paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
    </pre>
    <p>This is a basic HTML structure consisting of:</p>
    <ul>
        <li>&lt;html&gt;: The root element</li>
        <li>&lt;head&gt;: Contains metadata like the title of the page</li>
        <li>&lt;body&gt;: Contains the content that appears on the page</li>
    </ul>
    `;
    contentContainer.classList.remove('hidden');
});

// Handle the CSS button click event
cssBtn.addEventListener('click', () => {
    contentTitle.textContent = "CSS Tutorial";
    contentText.innerHTML = `
    <h3>Introduction to CSS</h3>
    <p>CSS (Cascading Style Sheets) is used to style and layout web pages.</p>
    <p>Below is an example of a simple CSS stylesheet:</p>
    <pre>
/* CSS Document Example */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

h1 {
    color: #3498db;
}

p {
    color: #2c3e50;
}
    </pre>
    <p>This CSS code does the following:</p>
    <ul>
        <li>Sets the font for the entire page to Arial, sans-serif</li>
        <li>Changes the background color of the page to a light gray (#f4f4f4)</li>
        <li>Styles the &lt;h1&gt; to have a blue color (#3498db)</li>
        <li>Styles the &lt;p&gt; to have a darker text color (#2c3e50)</li>
    </ul>
    `;
    contentContainer.classList.remove('hidden');
});
```

---
I'll help you fix the JavaScript code. However, I noticed that the code you provided is a mix of JavaScript, HTML, and CSS. I'll assume that you want to fix the JavaScript code to make it functional.

Here's the refactored JavaScript code:
```
// Get references to the buttons and content container
const learnBtn = document.getElementById('learnBtn');
const htmlBtn = document.getElementById('htmlBtn');
const cssBtn = document.getElementById('cssBtn');
const learnMoreButtons = document.getElementById('learnMoreButtons');
const contentContainer = document.getElementById('contentContainer');
const contentTitle = document.getElementById('contentTitle');
const contentText = document.getElementById('contentText');

// Show the "HTML" and "CSS" buttons when "Learn" is clicked
learnBtn.addEventListener('click', () => {
  learnMoreButtons.classList.remove('hidden');
  learnBtn.classList.add('hidden');
});

// Handle the HTML button click event
htmlBtn.addEventListener('click', () => {
  contentTitle.textContent = "HTML Tutorial";
  contentText.innerHTML = `
    <h3>Introduction to HTML</h3>
    <p>HTML (HyperText Markup Language) is the standard language for creating web pages.</p>
    <p>Below is a basic structure of an HTML document:</p>
    <pre>
      &lt;!DOCTYPE html&gt;
      &lt;html lang="en"&gt;
      &lt;head&gt;
      &lt;meta charset="UTF-8"&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
      &lt;title&gt;HTML Example&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
      &lt;h1&gt;Welcome to the HTML Document&lt;/h1&gt;
      &lt;p&gt;This is a simple HTML structure with a heading and a paragraph.&lt;/p&gt;
      &lt;/body&gt;
      &lt;/html&gt;
    </pre>
    <p>This is a basic HTML structure consisting of:</p>
    <ul>
      <li>&lt;html&gt;: The root element</li>
      <li>&lt;head&gt;: Contains metadata like the title of the page</li>
      <li>&lt;body&gt;: Contains the content that appears on the page</li>
    </ul>
  `;
  contentContainer.classList.remove('hidden');
});

// Handle the CSS button click event
cssBtn.addEventListener('click', () => {
  contentTitle.textContent = "CSS Tutorial";
  contentText.innerHTML = `
    <h3>Introduction to CSS</h3>
    <p>CSS (Cascading Style Sheets) is used to style and layout web pages.</p>
    <p>Below is an example of a simple CSS stylesheet:</p>
    <pre>
      /* CSS Document Example */
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
      }
      h1 {
        color: #3498db;
      }
      p {
        color: #2c3e50;
      }
    </pre>
    <p>This CSS code does the following:</p>
    <ul>
      <li>Sets the font for the entire page to Arial, sans-serif</li>
      <li>Changes the background color of the page to a light gray (#f4f4f4)</li>
      <li>Styles the &lt;h1&gt; to have a blue color (#3498db)</li>
      <li>Styles the &lt;p&gt; to have a darker text color (#2c3e50)</li>
    </ul>
  `;
  contentContainer.classList.remove('hidden');
});
```
function goToPDF() {
    // Use the absolute path to the PDF file
    window.location.href = "/storage/emulated/0/codex/Code.pdf";
}
console.log("PDF path:", "code.pdf");
console.log("Trying to load PDF from:", document.querySelector("iframe").src);
// Machine Code Simulation
const machineLanguageCode = `11001000 11001001 11001010 11001011 11001100 11001101 11001110 11001111 
                           11010000 11010001 11010010 11010011 11010100 11010101 11010110 11010111
                           11011000 11011001 11011010 11011011 11011100 11011101 11011110 11011111
                           11100000 11100001 11100010 11100011 11100100 11100101 11100110 11100111
                           11101000 11101001 11101010 11101011 11101100 11101101 11101110 11101111
                           11110000 11110001 11110010 11110011 11110100 11110101 11110110 11110111
                           11111000 11111001 11111010 11111011 11111100 11111101 11111110 11111111`;

const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample Page</title>
</head>
<body>
  <header>
    <h1>Welcome to the Majestic Web</h1>
    <p>Experience the magic of HTML, CSS, and JavaScript!</p>
  </header>
  <section>
    <div class="content-box">
      <p>This is a sample HTML structure.</p>
    </div>
  </section>
</body>
</html>`;

const cssCode = `body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  color: #333;
}
header {
  background-color: #6200ea;
  color: white;
  padding: 20px;
  text-align: center;
}
.content-box {
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}`;

// Display machine language code automatically
document.getElementById('machine-code').textContent = machineLanguageCode;

// Show HTML code automatically after displaying machine language
setTimeout(() => {
  document.getElementById('html-code-box').style.display = 'block';
  document.getElementById('html-code').textContent = htmlCode;

  // Show CSS code automatically after HTML code
  setTimeout(() => {
    document.getElementById('css-code-box').style.display = 'block';
    document.getElementById('css-code').textContent = cssCode;

    // Show browser preview automatically after CSS code
    setTimeout(() => {
      document.getElementById('browser-preview').style.display = 'block';
      const previewBox = document.getElementById('preview-box');
      previewBox.innerHTML = htmlCode;  // Display HTML code inside preview box
      previewBox.style.cssText = cssCode;  // Apply the CSS
    }, 2000); // Delay for CSS code to show

  }, 2000); // Delay for HTML code to show

}, 2000); // Delay for machine language to show
/* Floating Binary Effect */
.background-binary {
    position: relative;
    width: 100%;
    height: 400px;
    background-color: black;
    overflow: hidden;
    color: white;
}

.background-binary .content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 50px 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
}

.background-binary h2, .background-binary h3 {
    font-family: 'Arial', sans-serif;
    margin-bottom: 20px;
}

.background-binary p {
    font-size: 18px;
    line-height: 1.6;
}

.background-binary ul {
    list-style: none;
    padding: 0;
}

.background-binary ul li {
    margin: 10px 0;
    font-size: 18px;
}

.background-binary a {
    color: #00ff00;
    text-decoration: none;
}

.background-binary a:hover {
    text-decoration: underline;
}

.interactive-footer {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #00ff00;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Binary Animation */
@keyframes binaryFlow {
    0% {
        top: -100%;
    }
    100% {
        top: 100%;
    }
}

.background-binary:before {
    content: "1010100101010101010010101010101010101010101001010101"; /* Custom Binary Sequence */
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: 'Courier', monospace;
    font-size: 18px;
    color: #00ff00;
    opacity: 0.5;
    animation: binaryFlow 5s linear infinite;
}