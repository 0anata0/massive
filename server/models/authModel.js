import { getConnection } from "../config/database"

export const login = async (data) => {
  const db = await getConnection()
  const [result] = await db.query(`SELECT * FROM user WHERE username = '${data.username}'`)

  return result
}

export const register = async (data) => {
  const db = await getConnection()
  await db.query(`INSERT INTO user(username, password, role) VALUES ('${data.username}', '${data.password}', '${data.role}')`)

  return true;
} 

//ambil data user yang sedang login
export const loggedIn = async (username) => {
  const db = await getConnection()
  const [result] = await db.query(`SELECT * FROM user WHERE username = '${username}'`)

  return result
}

export const booking = async (data) => {
  const db = await getConnection()
  await db.query(
    `INSERT INTO booking(nama, tgl_lahir, jk, no_hp, tgl_naik, tgl_turun, no_hp_kel, email, identitas, no_identitas, alamat, ktp) VALUES (
      '${data.nama}', '${data.tgl_lahir}', '${data.jk}', '${data.no_hp}', '${data.tgl_naik}', '${data.tgl_turun}', '${data.no_hp_kel}', '${data.email}', '${data.identitas}', '${data.no_identitas}', '${data.alamat}', '${data.ktp}')`)
  return true;
}