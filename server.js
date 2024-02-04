require('dotenv').config();
import express from 'express';
import { createClient } from '@supabase/supabase-js';

const app = express();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/', async (req, res) => {
    let { data, error } = await supabase
        .from('your-table')
        .select('*')

    if (error) return res.status(500).send({ error: error.message });
    return res.status(200).send(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});