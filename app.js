const express = require('express'); 
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => { res.send('¡Hola! Mi primera app en Railway 🚂'); });
app.get('/api/status', (req, res) => { res.json({ message: 'API funcionando correctamente', timestamp: new Date().toISOString(), environment: process.env.NODE_ENV || 'development' });
});
app.listen(PORT, () => { console.log(`Servidor corriendo en puerto ${PORT}`); });
