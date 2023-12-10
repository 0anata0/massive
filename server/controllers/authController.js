import { login,register,loggedIn } from "../models/authModel"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const loginController = async (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password
  }

  try{
    const result = await login(data)
    const row = result[0]

    if(result.length > 0){ //jika username benar
      const match = await bcrypt.compare(data.password, row.password)
      
      if(match){ //jika password benar
        //daftarkan token
        const payload = {username: row.username}
        const token = jwt.sign(payload, '899TOKEN789', {expiresIn: "60day"})

        return res.status(200).json({
          id: row.id,
          username: row.username,
          role: row.role,
          success: true,
          token: token
        })
      }else{ //jika password salah
        return res.status(400).json({
          message: 'Password salah',
          success: false
        })
      }

    }else{
      return res.status(400).json({
        message: 'Username salah',
        success: false
      })
    }
    // console.log(result[0])
  }catch(err){
    return res.status(500).json({
      message: err
    })
  }

}

export const registerController = async (req, res) => {
  const data = {
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    role: req.body.role
  }

  try{
    await register(data)

    return res.status(200).json({
      message: 'Berhasil mendaftar, silahkan login',
      success: true,
    })
  } catch(err){
    return res.status(500).json({
      message: err
    })
  }
}

//cek data user yang sedang login
export const loggedInController = async (req, res) => {
  const username = res.locals.jwt.username

  try{
    const result = await loggedIn(username)

    return res.status(200).json({
      id: result[0].id,
      // firstname: result[0],firstname,
      username: result[0].username,
      role: result[0].role,
      loggedIn: true
    })
  }catch(err){
    return res.status(500).json({
      message: err
    })
  }
}

export const bookingController = async (req, res) => {
  const data = {
        nama: req.body.nama,
        tgl_lahir: new Date(req.body.tgl_lahir),
        jk: req.body.jk,
        no_hp: req.body.no_hp,
        tgl_naik: new Date(req.body.tgl_naik),
        tgl_turun: new Date(req.body.tgl_turun),
        no_hp_kel: req.body.no_hp_kel,
        email: req.body.email,
        identitas: req.body.identitas,
        no_identitas: req.body.no_identitas,
        alamat: req.body.alamat,
        ktp: req.body.ktp
      }
        try{
    const result = await booking(data);

    return res.status(200).json({
      message: 'Berhasil mendaftar pendakian',
      success: true,
      res
    })
  } catch(err){
    return res.status(500).json({
      message: err,
    
  })
}

};


