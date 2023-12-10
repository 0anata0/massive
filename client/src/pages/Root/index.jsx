import { useRouteMatch } from "react-router-dom";
import React, { useMemo } from "react";
import { useClient } from "../../components/client";
import { Navigation, RootProvider } from "./hoc";
import Router from "./Router";

import AdminDashboard from "../Admin.Dashboard";
import UserDashboard from "../User.Dashboard";
import About from "../About";
import Artikel from "../Artikel";
import Galeri from "../Galeri";
import Akun from "../Akun";
import EditAkun from "../Edit.Akun";
import Riwayat from "../Riwayat"
import Booking from "../Booking"
import BookingForm from "../Booking.Form"
import BookingForm2 from "../Booking.Form2";
import bookingSelesai from "../Booking.Selesai";
import Riwayat2 from "../Riwayat2";
import Sejarah from "../Sejarah"
import VisiMisi from "../VisiMisi"
import Ulasan from "../Ulasan";
import Riwayat4 from "../Riwayat4"
import Riwayat5 from "../Riwayat5"

const navigation = [
  {
    "title": "Dashboard Admin",
    "component": AdminDashboard,
    "path": "/admin",
    "permission": "admin",
    "exact": true,
  },
  {
    "title": "Dashboard User",
    "component": UserDashboard,
    "path": "/user",
    "permission": "user",
    "exact": true,
  },
  {
    "title": "About User",
    "component": About,
    "path": "/about",
    "permission": "user",
  },
  {
    "title": "Artikel User",
    "component": Artikel,
    "path": "/artikel",
    "permission": "user",
  },
  {
    "title": "Galeri User",
    "component": Galeri,
    "path": "/galeri",
    "permission": "user",
  },
  {
    "title": "Akun User",
    "component": Akun,
    "path": "/akun",
    "permission": "user",
  },
  {
    "title": "Edit Akun User",
    "component": EditAkun,
    "path": "/editakun",
    "permission": "user",
  },
  {
    "title": "Riwayat User",
    "component": Riwayat,
    "path": "/riwayat",
    "permission": "user",
  },
  {
    "title": "Booking User",
    "component": Booking,
    "path": "/pesan",
    "permission": "user",
  },
  {
    "title": "Booking Form User",
    "component": BookingForm,
    "path": "/bookingform",
    "permission": "user",
  },
  {
    "title": "Booking Form 2 User",
    "component": BookingForm2,
    "path": "/bookingform2",
    "permission": "user",
  },
  {
    "title": "Booking Selesai User",
    "component": bookingSelesai,
    "path": "/bookingselesai",
    "permission": "user",
  },
  {
    "title": "Riwayat 2 User",
    "component": Riwayat2,
    "path": "/riwayat2",
    "permission": "user",
  },
  {
    "title": "Sejarah User",
    "component": Sejarah,
    "path": "/sejarah",
    "permission": "user",
  },
  {
    "title": "Visi Misi User",
    "component": VisiMisi,
    "path": "/visimisi",
    "permission": "user",
  },
  {
    "title": "Ulasan User",
    "component": Ulasan,
    "path": "/ulasan",
    "permission": "user",
  },
  {
    "title": "Riwayat 4 User",
    "component": Riwayat4,
    "path": "/riwayat4",
    "permission": "user",
  },
  {
    "title": "Riwayat 5 User",
    "component": Riwayat5,
    "path": "/riwayat5",
    "permission": "user",
  },
]

const Root = () => {
  const {path} = useRouteMatch()
  const client = useClient()

  const items = useMemo(() => {
    return navigation.filter((({permission}) => {
      return permission ? permission === client.role : true

    }))
  }, [client.role])

  return(
    <RootProvider>
      <Navigation base={path} navigation={items}>
        <Router />
      </Navigation>
    </RootProvider>
  )

}

export default Root