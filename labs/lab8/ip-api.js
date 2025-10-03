import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 8082;
let publicIP;


async function getPublicIP() {
  
    try {
    const response = await axios.get('https://api.ipify.org?format=json');
    publicIP = response.data;
    } catch (error) {
        console.error('Failed to fetch public IP: ', error);
    }

    const ip = publicIP.ip; 
    return { ip, source: 'httpbin.org' };
}


app.get('/ip', async (req, res) => {
  try {
    const data = await getPublicIP();
    res.json(data); 
    res.send('Fetching IP address succeeded');
  } catch (err) {
    res.status(500).json({
      error: 'Failed to fetch IP address'
    });
  }
});

// Error handling middleware ตามสไลด์ 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


app.listen(PORT, () => {
  console.log(`IP API server running at http://localhost:${PORT}/ip`);
});