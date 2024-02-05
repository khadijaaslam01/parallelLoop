//XML PARSING
//problem 1
const xmlInput = `
    <root>
        <person>
            <name>John Doe</name>
            <age>25</age>
        </person>
        <person>
            <name>khadija </name>
            <age>20</age>
        </person>
    </root>`;

const parseXml = new DOMParser().parseFromString(xmlInput, "text/xml");

const person = parseXml.querySelectorAll("person");

for (const rootss of person) {
  const name = rootss.querySelector("name").textContent;
  const age = rootss.querySelector("age").textContent;
  console.log(name, age);
}

//problem 2

const xmlString = `
    <book>
        <title genre="fantasy">The Hobbit</title>
        <author>J.R.R. Tolkien</author>
    </book>`;

const xmlDoc = new DOMParser().parseFromString(xmlString, "text/xml");

const bookEl = xmlDoc.querySelector("book");
const titleEl = xmlDoc.querySelector("title");
const authorEl = xmlDoc.querySelector("author");

const title = titleEl.textContent;
const genre = titleEl.getAttribute("genre");
const auther = authorEl.textContent;
console.log(title, genre, auther);

//CSV parsing

// Sample CSV data

const csvString = `
Name,Age,Country
John,25,USA
Jane,30,Canada
Bob,22,UK
`;

Papa.parse(csvString, {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true, // Skip empty lines
  complete: function (results) {
    const parsedData = results.data;
    console.log(parsedData);
  },
});
