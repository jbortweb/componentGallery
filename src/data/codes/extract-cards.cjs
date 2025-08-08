const fs = require('fs');
const path = require('path');

// Leer el archivo cardCodes.js
const cardCodesPath = path.join(__dirname, '../cardCodes.js');
const cardCodesContent = fs.readFileSync(cardCodesPath, 'utf8');

// Extraer el contenido del objeto cardCodes
const cardCodesMatch = cardCodesContent.match(/export const cardCodes = \{([\s\S]*)\};?\s*$/);
if (!cardCodesMatch) {
  console.error('No se pudo encontrar el objeto cardCodes');
  process.exit(1);
}

const cardCodesObject = cardCodesMatch[1];

// Función para extraer una tarjeta específica
function extractCard(cardName, content) {
  const regex = new RegExp(`${cardName}: \`([\\s\\S]*?)\`(?=,\\s*(?:Profile|Article|Product)Card\\d+:|$)`, 'g');
  const match = regex.exec(content);
  return match ? match[1] : null;
}

// Mapear categorías a carpetas
const categoryMap = {
  'Profile': 'profiles',
  'Article': 'articles',
  'Product': 'products'
};

// Extraer todas las tarjetas
const cardTypes = ['Profile', 'Article', 'Product'];
const cardNumbers = [1, 2, 3, 4, 5, 6];

cardTypes.forEach(type => {
  cardNumbers.forEach(num => {
    const cardName = `${type}Card${num}`;
    const cardContent = extractCard(cardName, cardCodesObject);

    if (cardContent) {
      const folderName = categoryMap[type];
      const fileName = `${cardName}.js`;
      const filePath = path.join(__dirname, 'cards', folderName, fileName);

      // Crear el contenido del archivo
      const fileContent = `export const ${cardName} = \`${cardContent}\`;`;

      // Escribir el archivo
      fs.writeFileSync(filePath, fileContent, 'utf8');
      console.log(`✅ Creado: ${filePath}`);
    } else {
      console.log(`❌ No se encontró: ${cardName}`);
    }
  });
});

console.log('🎉 Proceso completado');
