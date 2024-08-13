const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const z = require("zod");
const jwt = require("jsonwebtoken");
const jwtSecret = "guptlekh"

async function main() {
  await mongoose.connect('mongodb+srv://arshil:pharma@cluster0.0pv7w.mongodb.net/pharma-app');
}
main().then(console.log("db connected successfully")).catch(err => console.log(err));


const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const Uservalidation = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

const User = mongoose.model('User', userSchema);

const app = express();
const port = 3000
app.use(express.json())
app.use(cors())

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const s = Uservalidation.safeParse({ username, email, password })
  if (!s.success) {
    return res.status(400).json(s.error)
  }
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      const resp = await User.create({
        username,
        email,
        password
      });
      console.log('User created successfully');
      return res.status(200).json({
        msg: 'User created successfully',
      });
    } else {
      return res.status(400).json({
        msg: 'Username already exists',
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: 'Internal server error'
    })
  }
})

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password })
  if (!user) {
    return res.status(400).json({ msg: 'Invalid username or password' })
  } else {
    const token = jwt.sign({username: "kuchh likha hai"},jwtSecret)
    return res.status(200).json({ msg: 'User logged in successfully', token:
      "Bearer "+token
    })
  }
})

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})