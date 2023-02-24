var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"login","loadChildren":"./login/login.module#LoginModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/login/login-routing.module.ts","module":"LoginRoutingModule","children":[{"path":"","component":"LoginComponent"}],"kind":"module"}],"module":"LoginModule"}]},{"path":"cocina-bar","loadChildren":"./cocinabar/cocinabar.module#CocinabarModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/cocinabar/cocinabar-routing.module.ts","module":"CocinabarRoutingModule","children":[{"path":"cocina","component":"CocinabarComponent","data":{"path":"cocina"}},{"path":"bar","component":"CocinabarComponent","data":{"path":"bar"}},{"path":"","pathMatch":"full","redirectTo":"cocina"},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"}],"module":"CocinabarModule"}]},{"path":"hotel","loadChildren":"./home/home.module#HomeModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","component":"HomeComponent","children":[{"path":"rolesYPermisos","loadChildren":"./modals/roles-y-permisos/roles-y-permisos.module#RolesYPermisosModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/modals/roles-y-permisos/roles-y-permisos-routing.module.ts","module":"RolesYPermisosRoutingModule","children":[{"path":"","component":"ListaDeRolesComponent"},{"path":"agregar","component":"AgregarEditarRolComponent"}],"kind":"module"}],"module":"RolesYPermisosModule"}]},{"path":"rentaHabitacion","loadChildren":"./inicio-habitaciones/entrada-habitacion/entrada-habitacion.module#EntradaHabitacionModule"},{"path":"roomService","loadChildren":"./inicio-habitaciones/room-service/room-service.module#RoomServiceModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/inicio-habitaciones/room-service/room-service-routing.module.ts","module":"RoomServiceRoutingModule","children":[{"path":":roomNumber","component":"CrearComandaRoomserviceComponent"},{"path":"comandas/:roomNumber","component":"LiberarPagarRoomServiceComponent"},{"path":"pago/:roomNumber","component":"PagoComandasComponent"}],"kind":"module"}],"module":"RoomServiceModule"}]},{"path":"entradaDeHabitacion","component":"DarEntradaHabitacionComponent"},{"path":"salida","loadChildren":"../salida/salida.module#SalidaModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/salida/salida-routing.module.ts","module":"SalidaRoutingModule","children":[{"path":"enviarLimpieza/:roomNumber","component":"MandarLimpiezaHabitacionComponent"},{"path":"limpieza/:roomNumber","component":"LimpiezaHabitacionComponent"},{"path":"supervisar/:roomNumber","component":"MandarSupervisarHabitacionComponent"},{"path":"liberar/:roomNumber","component":"LiberarHabitacionComponent"},{"path":"confirmar/:roomNumber","component":"AceptarSalidaComponent"}],"kind":"module"}],"module":"SalidaModule"}]},{"path":"mantenimiento","loadChildren":"./inicio-habitaciones/mantenimiento/mantenimiento.module#MantenimientoModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/inicio-habitaciones/mantenimiento/mantenimiento-routing.module.ts","module":"MantenimientoRoutingModule","children":[{"path":":roomNumber","component":"MantenimientoComponent"}],"kind":"module"}],"module":"MantenimientoModule"}]},{"path":"deshabilitarHabitacion","loadChildren":"./inicio-habitaciones/deshabilitar-habitacion/deshabilitar-habitacion.module#DeshabilitarHabitacionModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/inicio-habitaciones/deshabilitar-habitacion/deshabilitar-habitacion-routing.module.ts","module":"DeshabilitarHabitacionRoutingModule","children":[{"path":":roomNumber","component":"DeshabilitarHabitacionComponent"}],"kind":"module"}],"module":"DeshabilitarHabitacionModule"}]},{"path":"reservacion","loadChildren":"./inicio-habitaciones/reservacion/reservacion.module#ReservacionModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/inicio-habitaciones/reservacion/reservacion-routing.module.ts","module":"ReservacionRoutingModule","children":[{"path":":roomNumber","component":"AsignarReservacionComponent"}],"kind":"module"}],"module":"ReservacionModule"}]},{"path":"camaristasEnTurno","loadChildren":"./inicio-habitaciones/camaristas-en-turno/camaristas-en-turno.module#CamaristasEnTurnoModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/inicio-habitaciones/camaristas-en-turno/camaristas-en-turno-routing.module.ts","module":"CamaristasEnTurnoRoutingModule","children":[{"path":"","component":"CamaristasEnTurnoComponent"}],"kind":"module"}],"module":"CamaristasEnTurnoModule"}]},{"path":"reportar","loadChildren":"../reportar/reportar.module#ReportarModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/reportar/reportar-routing.module.ts","module":"ReportarRoutingModule","children":[{"path":"","loadChildren":"./matricula/matricula.module#MatriculaModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/reportar/matricula/matricula-routing.module.ts","module":"MatriculaRoutingModule","children":[{"path":"matricula","component":"MatriculaComponent"}],"kind":"module"}],"module":"MatriculaModule"}]}],"kind":"module"}],"module":"ReportarModule"}]},{"path":"fajillas","loadChildren":"../fajillas/fajillas.module#FajillasModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/fajillas/fajillas-routing.module.ts","module":"FajillasRoutingModule","children":[{"path":"configurar","loadChildren":"./configurar/configurar.module#ConfigurarModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/fajillas/configurar/configurar-routing.module.ts","module":"ConfigurarRoutingModule","children":[{"path":"","component":"ConfigurarComponent"}],"kind":"module"}],"module":"ConfigurarModule"}]}],"kind":"module"}],"module":"FajillasModule"}]},{"path":"configuraciones","loadChildren":"./sistemas/configuraciones/configuraciones.module#ConfiguracionesModule"},{"path":"impresoras","loadChildren":"../impresoras/impresoras.module#ImpresorasModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/impresoras/impresoras-routing.module.ts","module":"ImpresorasRoutingModule","children":[{"path":"lista","loadChildren":"./lista/lista.module#ListaModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/impresoras/lista/lista-routing.module.ts","module":"ListaRoutingModule","children":[{"path":"","component":"ListaComponent"},{"path":"registro","loadChildren":"./pages/registro/registro.module#RegistroModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/paquetes/pages/registro/registro-routing.module.ts","module":"RegistroRoutingModule","children":[{"path":"","component":"RegistroComponent"}],"kind":"module"}],"module":"RegistroModule"}]},{"path":"editar","loadChildren":"./pages/editar/editar.module#EditarModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/paquetes/pages/editar/editar-routing.module.ts","module":"EditarRoutingModule","children":[{"path":"","component":"EditarComponent"}],"kind":"module"}],"module":"EditarModule"}]},{"path":"ver","loadChildren":"./pages/ver/ver.module#VerModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/paquetes/pages/ver/ver-routing.module.ts","module":"VerRoutingModule","children":[{"path":"","component":"VerComponent"}],"kind":"module"}],"module":"VerModule"}]}],"kind":"module"}],"module":"ListaModule"}]},{"path":"movimientos","loadChildren":"./movimientos/movimientos.module#MovimientosModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/impresoras/movimientos/movimientos-routing.module.ts","module":"MovimientosRoutingModule","children":[{"path":"","component":"MovimientosComponent"},{"path":"configurar","loadChildren":"./pages/configurar-ticket/configurar-ticket.module#ConfigurarTicketModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/impresoras/movimientos/pages/configurar-ticket/configurar-ticket-routing.module.ts","module":"ConfigurarTicketRoutingModule","children":[{"path":"","component":"ConfigurarTicketComponent"},{"path":"select","component":"SelectImpresoraComponent"}],"kind":"module"}],"module":"ConfigurarTicketModule"}]},{"path":"ver","loadChildren":"./pages/ver/ver.module#VerModule","children":[{"kind":"module","children":[],"module":"VerModule"}]}],"kind":"module"}],"module":"MovimientosModule"}]}],"kind":"module"}],"module":"ImpresorasModule"}]},{"path":"conceptos","loadChildren":"./sistemas/conceptos/conceptos.module#ConceptosModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/sistemas/conceptos/conceptos-routing.module.ts","module":"ConceptosRoutingModule","children":[{"path":"","component":"ConceptosComponent"},{"path":"crear","component":"CrearComponent"},{"path":"modificar/:idConcepto","component":"ModificarComponent"}],"kind":"module"}],"module":"ConceptosModule"}]},{"path":"tarifas","loadChildren":"../tarifas/tarifas.module#TarifasModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tarifas/tarifas-routing.module.ts","module":"TarifasRoutingModule","children":[{"path":"","component":"TarifasComponent"},{"path":"registro","loadChildren":"./pages/registro/registro.module#RegistroModule","children":[{"kind":"module","children":[],"module":"RegistroModule"}]},{"path":"editar","loadChildren":"./pages/editar/editar.module#EditarModule","children":[{"kind":"module","children":[],"module":"EditarModule"}]},{"path":"ver","loadChildren":"./pages/ver/ver.module#VerModule","children":[{"kind":"module","children":[],"module":"VerModule"}]}],"kind":"module"}],"module":"TarifasModule"}]},{"path":"gastos","loadChildren":"./sistemas/gastos/gastos.module#GastosModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/sistemas/gastos/gastos-routing.module.ts","module":"GastosRoutingModule","children":[{"path":"","component":"GastosComponent","children":[{"path":"gastosGenerales","loadChildren":"./gastos-generales/gastos-generales.module#GastosGeneralesModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/sistemas/gastos/gastos-generales/gastos-generales-routing.module.ts","module":"GastosGeneralesRoutingModule","children":[{"path":"","component":"GastosGeneralesComponent"},{"path":"crearGastoGeneral","component":"CrearGastoGeneralComponent"},{"path":"modificarGastoGeneral/:idGasto","component":"ModificarGastosGeneralesComponent"},{"path":"verGastoGeneral/:idGasto","component":"VerGastosGeneralesComponent"}],"kind":"module"}],"module":"GastosGeneralesModule"}]}]}],"kind":"module"}],"module":"GastosModule"}]},{"path":"habitaciones","loadChildren":"./sistemas/habitaciones/habitaciones.module#HabitacionesModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/sistemas/habitaciones/habitaciones-routing.module.ts","module":"HabitacionesRoutingModule","children":[{"path":"","children":[{"path":"limpieza","loadChildren":"./limpieza/limpieza.module#LimpiezaModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/sistemas/habitaciones/limpieza/limpieza-routing.module.ts","module":"LimpiezaRoutingModule","children":[{"path":"","component":"LimpiezaComponent"}],"kind":"module"}],"module":"LimpiezaModule"}]}]}],"kind":"module"}],"module":"HabitacionesModule"}]},{"path":"paquetes","loadChildren":"../paquetes/paquetes.module#PaquetesModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/paquetes/paquetes-routing.module.ts","module":"PaquetesRoutingModule","children":[{"path":"","component":"PaquetesComponent"},{"path":"registro","loadChildren":"./pages/registro/registro.module#RegistroModule","children":[{"kind":"module","children":[],"module":"RegistroModule"}]},{"path":"editar","loadChildren":"./pages/editar/editar.module#EditarModule","children":[{"kind":"module","children":[],"module":"EditarModule"}]},{"path":"ver","loadChildren":"./pages/ver/ver.module#VerModule","children":[{"kind":"module","children":[],"module":"VerModule"}]}],"kind":"module"}],"module":"PaquetesModule"}]}]}],"kind":"module"}],"module":"HomeModule"}]},{"path":"room-service","loadChildren":"./home/inicio-habitaciones/room-service/room-service.module#RoomServiceModule","children":[{"kind":"module","children":[],"module":"RoomServiceModule"}]},{"path":"ImprimirTicketHabitacion","loadChildren":"./ticket-renta/ticket-renta.module#TicketRentaModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/ticket-renta/ticket-renta-routing.module.ts","module":"TicketRentaRoutingModule","children":[{"path":"","component":"TicketRentaComponent"}],"kind":"module"}],"module":"TicketRentaModule"}]},{"path":"","pathMatch":"full","redirectTo":"login"},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"}]}
