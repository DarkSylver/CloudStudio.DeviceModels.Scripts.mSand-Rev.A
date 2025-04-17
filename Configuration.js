function getConfiguration(config) {

    config.addressLabel = {en: "Serial Number", es: "Número de Serie"};
}

function getEndpoints(deviceAddress, endpoints) {
  var dpt1_ss1 = endpoints.addEndpoint("DPT1_SS1", {en: "SS1 - Delta PT1 to end dump", es: "SS1 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor);
                    dpt1_ss1.variableTypeId = 1229; 
                    dpt1_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dpt1_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dpt1_ss1.accessType = endpointAccessType.readWriteCommand;  
   var dpt1_ss2 = endpoints.addEndpoint("DPT1_SS2", {en: "SS2 - Delta PT1 to end dump", es: "SS2 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor);
                    dpt1_ss2.variableTypeId = 1229; 
                    dpt1_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dpt1_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dpt1_ss2.accessType = endpointAccessType.readWriteCommand;  
   var dpt1_ss3 = endpoints.addEndpoint("DPT1_SS3", {en: "SS3 - Delta PT1 to end dump", es: "SS3 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor);
                    dpt1_ss3.variableTypeId = 1229; 
                    dpt1_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dpt1_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dpt1_ss3.accessType = endpointAccessType.readWriteCommand;  
   var dpt1_ss4 = endpoints.addEndpoint("DPT1_SS4", {en: "SS4 - Delta PT1 to end dump", es: "SS4 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor);
                    dpt1_ss4.variableTypeId = 1229; 
                    dpt1_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dpt1_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dpt1_ss4.accessType = endpointAccessType.readWriteCommand;  
   var dpt1_test = endpoints.addEndpoint("DPT1_TEST", {en: "Delta PT1 for test", es: "Delta PT1 para la prueba"}, endpointType.genericSensor);
                    dpt1_test.variableTypeId = 1229; 
                    dpt1_test.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dpt1_test.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dpt1_test.accessType = endpointAccessType.readWriteCommand;  
   var dpt1_ss5 = endpoints.addEndpoint("DPT1_SS5", {en: "SS5 - Delta PT1 to end dump", es: "SS5 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor);
                    dpt1_ss5.variableTypeId = 1229; 
                    dpt1_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dpt1_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dpt1_ss5.accessType = endpointAccessType.readWriteCommand;  
   var dpt1_ss6 = endpoints.addEndpoint("DPT1_SS6", {en: "SS6 - Delta PT1 to end dump", es: "SS6 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor);
                    dpt1_ss6.variableTypeId = 1229; 
                    dpt1_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dpt1_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dpt1_ss6.accessType = endpointAccessType.readWriteCommand;  
   var dpt1_ss7 = endpoints.addEndpoint("DPT1_SS7", {en: "SS7 - Delta PT1 to end dump", es: "SS7 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor);
                    dpt1_ss7.variableTypeId = 1229; 
                    dpt1_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dpt1_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dpt1_ss7.accessType = endpointAccessType.readWriteCommand;  
   var dpt1_ss8 = endpoints.addEndpoint("DPT1_SS8", {en: "SS8 - Delta PT1 to end dump", es: "SS8 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor);
                    dpt1_ss8.variableTypeId = 1229; 
                    dpt1_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dpt1_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dpt1_ss8.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("ALARMS", {en: "There are alarms", es: "Hay Alarmas"}, endpointType.genericSensor)
              .variableTypeId = 1217; 
    endpoints.addEndpoint("ALTERNATIVE_USE", {en: "Alternative of use", es: "Uso alternativo"}, endpointType.genericSensor)
              .variableTypeId = 1218; 
    endpoints.addEndpoint("CMD_DUMP_SS1", {en: "Dump SS1 Command", es: "Comando 'vaciado de SS1"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CMD_DUMP_SS2", {en: "Dump SS2 Command", es: "Comando 'vaciado de SS2"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CMD_DUMP_SS3", {en: "Dump SS3 Command", es: "Comando 'vaciado de SS3"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CMD_DUMP_SS4", {en: "Dump SS4 Command", es: "Comando 'vaciado de SS4"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CMD_TEST", {en: "Test Command", es: "Comando 'test'"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CMD_STOP", {en: "Stop Command", es: "Comando 'parar'"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CMD_RST_ERR", {en: "Reset Command (Quit Error Mode)", es: "Comando de reinicio (salir de modo error)"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CMD_RST_DUMPS", {en: "Clear Dump Counter Command", es: "Comando 'borrar contador de vaciados'"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CMD_RST_A", {en: "Clear Alarms Command", es: "Comando 'borrar alarmas'"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CMD_DUMP_SS5", {en: "Dump SS5 Command", es: "Comando de vaciado SS5"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CMD_DUMP_SS6", {en: "Dump SS6 Command", es: "Comando de vaciado SS6"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("PT3_SS1", {en: "SS1 PT3 Current Value", es: "Valor actual de SS1 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS2", {en: "SS2 PT3 Current Value", es: "Valor actual de SS2 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS3", {en: "SS3 PT3 Current Value", es: "Valor actual de SS3 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS4", {en: "SS4 PT3 Current Value", es: "Valor actual de SS4 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS1", {en: "SS1 PT2 Current Value", es: "Valor actual de SS1 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS2", {en: "SS2 PT2 Current Value", es: "Valor actual de SS2 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS3", {en: "SS3 PT2 Current Value", es: "Valor actual de SS3 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS4", {en: "SS4 PT2 Current Value", es: "Valor actual de SS4 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS5", {en: "SS5 PT3 Current Value", es: "Valor actual de SS5 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS6", {en: "SS6 PT3 Current Value", es: "Valor actual de SS6 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS7", {en: "SS7 PT3 Current Value", es: "Valor actual de SS7 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS8", {en: "SS8 PT3 Current Value", es: "Valor actual de SS8 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT1", {en: "PT1 Current Value", es: "Valor actual de PT1"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("WGT1_MW8", {en: "mW8 WG1 Current Value", es: "Valor actual de mW8 WG1"}, endpointType.weightSensor); 
    endpoints.addEndpoint("PT2_SS5", {en: "SS5 PT2 Current Value", es: "Valor actual de SS5 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS6", {en: "SS6 PT2 Current Value", es: "Valor actual de SS6 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS7", {en: "SS7 PT2 Current Value", es: "Valor actual de SS7 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS8", {en: "SS8 PT2 Current Value", es: "Valor actual de SS8 PT2 "}, endpointType.pressureSensor); 
    endpoints.addEndpoint("AP", {en: "mSand AP Current Value", es: "Valor actual demSand AP"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("AP_MMS", {en: "MMS AP Current Value", es: "Valor actual de MMS AP"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("AP_MW8", {en: "mW8 AP Current Value", es: "Valor actual de mW8 AP"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("CB", {en: "mSand Control Battery", es: "Batería de control de mSand"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("CB_MMS", {en: "MMS Control Battery", es: "Batería de control de MMS"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("CB_MW8", {en: "mW8 Control Battery", es: "Batería de control de mW8"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("PB", {en: "mSand Power Battery", es: "Potencia de Batería de mSand"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("PB_MMS", {en: "MMS Power Battery", es: "Potencia de Batería de MMS"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("PB_MW8", {en: "mW8 Power Battery", es: "Potencia de Batería de mW8"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("CT", {en: "mSand Cabinet Temperature", es: "Temperatura del Gabinete de mSand"}, endpointType.temperatureSensor); 
    endpoints.addEndpoint("CMD_DUMP_SS7", {en: "Dump SS7 Command", es: "Comando de vaciado SS7"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CMD_DUMP_SS8", {en: "Dump SS8 Command", es: "Comando de vaciado SS8"}, endpointType.genericSensor)
              .variableTypeId = 1219; 
    endpoints.addEndpoint("CURRENT_PROCESS", {en: "Current process", es: "Proceso actual"}, endpointType.genericSensor)
              .variableTypeId = 1220; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS1", {en: "SS1 PT3 sensor disconnected", es: "Sensor desconectado de SS1 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
  var dpt3pt2_ss1 = endpoints.addEndpoint("DPT3PT2_SS1", {en: "SS1 - Differential PT3-PT2", es: "SS1 - Diferencial PT3-PT2"}, endpointType.pressureSensor);
                      dpt3pt2_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      dpt3pt2_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      dpt3pt2_ss1.accessType = endpointAccessType.readWriteCommand;  
   var dpt3pt2_ss2 = endpoints.addEndpoint("DPT3PT2_SS2", {en: "SS2 - Differential PT3-PT2", es: "SS2 - Diferencial PT3-PT2"}, endpointType.pressureSensor);
                      dpt3pt2_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      dpt3pt2_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      dpt3pt2_ss2.accessType = endpointAccessType.readWriteCommand;  
   var dpt3pt2_ss3 = endpoints.addEndpoint("DPT3PT2_SS3", {en: "SS3 - Differential PT3-PT2", es: "SS3 - Diferencial PT3-PT2"}, endpointType.pressureSensor);
                      dpt3pt2_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      dpt3pt2_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      dpt3pt2_ss3.accessType = endpointAccessType.readWriteCommand;  
   var dpt3pt2_ss4 = endpoints.addEndpoint("DPT3PT2_SS4", {en: "SS4 - Differential PT3-PT2", es: "SS4 - Diferencial PT3-PT2"}, endpointType.pressureSensor);
                      dpt3pt2_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      dpt3pt2_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      dpt3pt2_ss4.accessType = endpointAccessType.readWriteCommand;  
   var hipt3_ss1 = endpoints.addEndpoint("HIPT3_SS1", {en: "SS1 - High PT3", es: "SS1 - PT3 Alto"}, endpointType.pressureSensor);
                      hipt3_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      hipt3_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      hipt3_ss1.accessType = endpointAccessType.readWriteCommand;  
   var hipt3_ss2 = endpoints.addEndpoint("HIPT3_SS2", {en: "SS2 - High PT3", es: "SS2 - PT3 Alto"}, endpointType.pressureSensor);
                      hipt3_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      hipt3_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      hipt3_ss2.accessType = endpointAccessType.readWriteCommand;  
   var hipt3_ss3 = endpoints.addEndpoint("HIPT3_SS3", {en: "SS3 - High PT3", es: "SS3 - PT3 Alto"}, endpointType.pressureSensor);
                      hipt3_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      hipt3_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      hipt3_ss3.accessType = endpointAccessType.readWriteCommand;  
   var hipt3_ss4 = endpoints.addEndpoint("HIPT3_SS4", {en: "SS4 - High PT3", es: "SS4 - PT3 Alto"}, endpointType.pressureSensor);
                      hipt3_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      hipt3_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      hipt3_ss4.accessType = endpointAccessType.readWriteCommand;  
   var hipt3_ss5 = endpoints.addEndpoint("HIPT3_SS5", {en: "SS5 - High PT3", es: "SS5 - PT3 Alto"}, endpointType.pressureSensor);
                      hipt3_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      hipt3_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      hipt3_ss5.accessType = endpointAccessType.readWriteCommand;  
   var hipt3_ss6 = endpoints.addEndpoint("HIPT3_SS6", {en: "SS6 - High PT3", es: "SS6 - PT3 Alto"}, endpointType.pressureSensor);
                      hipt3_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      hipt3_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      hipt3_ss6.accessType = endpointAccessType.readWriteCommand;  
   var hipt3_ss7 = endpoints.addEndpoint("HIPT3_SS7", {en: "SS7 - High PT3", es: "SS7 - PT3 Alto"}, endpointType.pressureSensor);
                      hipt3_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      hipt3_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      hipt3_ss7.accessType = endpointAccessType.readWriteCommand;  
   var hipt3_ss8 = endpoints.addEndpoint("HIPT3_SS8", {en: "SS8 - High PT3", es: "SS8 - PT3 Alto"}, endpointType.pressureSensor);
                      hipt3_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      hipt3_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      hipt3_ss8.accessType = endpointAccessType.readWriteCommand;  
   var h_hipt3_ss1 = endpoints.addEndpoint("H_HIPT3_SS1", {en: "SS1 - High high PT3", es: "SS1 - PT3 Alto alto"}, endpointType.pressureSensor);
                      h_hipt3_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      h_hipt3_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      h_hipt3_ss1.accessType = endpointAccessType.readWriteCommand;  
   var h_hipt3_ss2 = endpoints.addEndpoint("H_HIPT3_SS2", {en: "SS2 - High high PT3", es: "SS2 - PT3 Alto alto"}, endpointType.pressureSensor);
                      h_hipt3_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      h_hipt3_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      h_hipt3_ss2.accessType = endpointAccessType.readWriteCommand;  
   var h_hipt3_ss3 = endpoints.addEndpoint("H_HIPT3_SS3", {en: "SS3 - High high PT3", es: "SS3 - PT3 Alto alto"}, endpointType.pressureSensor);
                      h_hipt3_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      h_hipt3_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      h_hipt3_ss3.accessType = endpointAccessType.readWriteCommand;  
   var h_hipt3_ss4 = endpoints.addEndpoint("H_HIPT3_SS4", {en: "SS4 - High high PT3", es: "SS4 - PT3 Alto alto"}, endpointType.pressureSensor);
                      h_hipt3_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      h_hipt3_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      h_hipt3_ss4.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("A_PT3_DISCONNECTED_SS2", {en: "SS2 PT3 sensor disconnected", es: "Sensor desconectado de SS2 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS3", {en: "SS3 PT3 sensor disconnected", es: "Sensor desconectado de SS3 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS4", {en: "SS4 PT3 sensor disconnected", es: "Sensor desconectado de SS4 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS1", {en: "SS1 PT2 sensor disconnected", es: "Sensor desconectado de SS1 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS2", {en: "SS2 PT2 sensor disconnected", es: "Sensor desconectado de SS2 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS3", {en: "SS3 PT2 sensor disconnected", es: "Sensor desconectado de SS3 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS4", {en: "SS4 PT2 sensor disconnected", es: "Sensor desconectado de SS4 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT1_DISCONNECTED", {en: "PT1 sensor disconnected", es: "Sensor desconectado de PT1"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_WGT1_DISCONNECTED_MW8", {en: "mW8 WG1 sensor disconnected", es: "Sensor desconectado de mW8 WG1"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_AP_DISCONNECTED_MMS2", {en: "MMS2 AP sensor disconnected", es: "Sensor desconectado de MMS2 AP"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_AP_DISCONNECTED", {en: "mSand AP sensor disconnected", es: "Sensor desconectado de mSand AP"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_AP_DISCONNECTED_MMS", {en: "MMS AP sensor disconnected", es: "Sensor desconectado de MMS AP"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_AP_DISCONNECTED_MW8", {en: "mW8 AP sensor disconnected", es: "Sensor desconectado de mW8 AP"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_SIEVE_FAIL_MW8", {en: "MW8 Sieve operation failure", es: "MW8 Falla en funcionamiento del sieve"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS5", {en: "SS5 PT3 sensor", es: "Sensor SS5 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS6", {en: "SS6 PT3 sensor", es: "Sensor SS6 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS7", {en: "SS7 PT3 sensor", es: "Sensor SS7 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS8", {en: "SS8 PT3 sensor", es: "Sensor SS58 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS5", {en: "SS5 PT2 sensor", es: "Sensor SS5 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS6", {en: "SS6 PT2 sensor", es: "Sensor SS6 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS7", {en: "SS7 PT2 sensor", es: "Sensor SS7 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS8", {en: "SS8 PT2 sensor", es: "Sensor SS8 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
    endpoints.addEndpoint("A_P1_DISCONNECTED", {en: "P1 sensor", es: "Sensor P1"}, endpointType.genericSensor)
              .variableTypeId = 1221; 
  var s_tbd_ss1 = endpoints.addEndpoint("S_TBD_SS1", {en: "SS1 - Time Between Dumps", es: "Tiempo entre vaciados de SS1"}, endpointType.genericSensor);
                    s_tbd_ss1.variableTypeId = 1222; 
                    s_tbd_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_tbd_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_tbd_ss1.accessType = endpointAccessType.readWriteCommand;  
   var s_tbd_ss2 = endpoints.addEndpoint("S_TBD_SS2", {en: "SS2 - Time Between Dumps", es: "Tiempo entre vaciados de SS2"}, endpointType.genericSensor);
                    s_tbd_ss2.variableTypeId = 1222; 
                    s_tbd_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_tbd_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_tbd_ss2.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("P1", {en: "P1 Current Value", es: "Valor actual de P1"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("AP_MMS2", {en: "MMS2 AP Current Value", es: "Valor actual de AP MMS2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("CB_MMS2", {en: "MMS2 Control Battery", es: "Batería de control de MMS2"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("PB_MMS2", {en: "MMS2 Power Battery", es: "Poder de Batería de MMS2"}, endpointType.voltageSensor); 
  var s_tbd_ss3 = endpoints.addEndpoint("S_TBD_SS3", {en: "SS3 - Time Between Dumps", es: "Tiempo entre vaciados de SS3"}, endpointType.genericSensor);
                    s_tbd_ss3.variableTypeId = 1222; 
                    s_tbd_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_tbd_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_tbd_ss3.accessType = endpointAccessType.readWriteCommand;  
   var s_tbd_ss4 = endpoints.addEndpoint("S_TBD_SS4", {en: "SS4 - Time Between Dumps", es: "Tiempo entre vaciados de SS4"}, endpointType.genericSensor);
                    s_tbd_ss4.variableTypeId = 1222; 
                    s_tbd_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_tbd_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_tbd_ss4.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("P1PT1IV", {en: "P1/PT1 Incorrect Value", es: "Valor incorrecto P1/PT1"}, endpointType.pressureSensor); 
  var s_dpt3pt2_ss1 = endpoints.addEndpoint("S_DPT3PT2_SS1", {en: "SS1 - Differential PT3-PT2", es: "SS1 - Diferencial PT3-PT2"}, endpointType.genericSensor);
                    s_dpt3pt2_ss1.variableTypeId = 1222; 
                    s_dpt3pt2_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_dpt3pt2_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_dpt3pt2_ss1.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("TW_SS1", {en: "SS1 - Tare Weight", es: "Peso de Tara de SS1"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS1", {en: "SS1 - Initial Weight", es: "Peso incial de SS1"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS1", {en: "SS1 - Drained Weight", es: "Peso escurrido de SS1"}, endpointType.weightSensor); 
  var s_dpt3pt2_ss2 = endpoints.addEndpoint("S_DPT3PT2_SS2", {en: "SS2 - Differential PT3-PT2", es: "SS2 - Diferencial PT3-PT2"}, endpointType.genericSensor);
                    s_dpt3pt2_ss2.variableTypeId = 1222; 
                    s_dpt3pt2_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_dpt3pt2_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_dpt3pt2_ss2.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("TW_SS2", {en: "SS2 - Tare Weight", es: "Peso de Tara de SS2"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS2", {en: "SS2 - Initial Weight", es: "Peso incial de SS2"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS2", {en: "SS2 - Drained Weight", es: "Peso escurrido de SS2"}, endpointType.weightSensor); 
  var s_dpt3pt2_ss3 = endpoints.addEndpoint("S_DPT3PT2_SS3", {en: "SS3 - Differential PT3-PT2", es: "SS3 - Diferencial PT3-PT2"}, endpointType.genericSensor);
                    s_dpt3pt2_ss3.variableTypeId = 1222; 
                    s_dpt3pt2_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_dpt3pt2_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_dpt3pt2_ss3.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("TW_SS3", {en: "SS3 - Tare Weight", es: "Peso de Tara de SS3"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS3", {en: "SS3 - Initial Weight", es: "Peso incial de SS3"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS3", {en: "SS3 - Drained Weight", es: "Peso escurrido de SS3"}, endpointType.weightSensor); 
  var s_dpt3pt2_ss4 = endpoints.addEndpoint("S_DPT3PT2_SS4", {en: "SS4 - Differential PT3-PT2", es: "SS4 - Diferencial PT3-PT2"}, endpointType.genericSensor);
                    s_dpt3pt2_ss4.variableTypeId = 1222; 
                    s_dpt3pt2_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_dpt3pt2_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_dpt3pt2_ss4.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("TW_SS4", {en: "SS4 - Tare Weight", es: "Peso de Tara de SS4"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS4", {en: "SS4 - Initial Weight", es: "Peso incial de SS4"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS4", {en: "SS4 - Drained Weight", es: "Peso escurrido de SS4"}, endpointType.weightSensor); 
  var s_hipt3_ss1 = endpoints.addEndpoint("S_HIPT3_SS1", {en: "SS1 - High PT3", es: "SS1 - PT3 Alto"}, endpointType.genericSensor);
                    s_hipt3_ss1.variableTypeId = 1222; 
                    s_hipt3_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_hipt3_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_hipt3_ss1.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("TW_SS5", {en: "SS5 - Tare Weight", es: "Peso de Tara de SS5"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS5", {en: "SS5 - Initial Weight", es: "Peso incial de SS5"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS5", {en: "SS5 - Drained Weight", es: "Peso escurrido de SS5"}, endpointType.weightSensor); 
  var s_hipt3_ss2 = endpoints.addEndpoint("S_HIPT3_SS2", {en: "SS2 - High PT3", es: "SS2 - PT3 Alto"}, endpointType.genericSensor);
                    s_hipt3_ss2.variableTypeId = 1222; 
                    s_hipt3_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_hipt3_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_hipt3_ss2.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("TW_SS6", {en: "SS6 - Tare Weight", es: "Peso de Tara de SS6"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS6", {en: "SS6 - Initial Weight", es: "Peso incial de SS6"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS6", {en: "SS6 - Drained Weight", es: "Peso escurrido de SS6"}, endpointType.weightSensor); 
  var s_hipt3_ss3 = endpoints.addEndpoint("S_HIPT3_SS3", {en: "SS3 - High PT3", es: "SS3 - PT3 Alto"}, endpointType.genericSensor);
                    s_hipt3_ss3.variableTypeId = 1222; 
                    s_hipt3_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_hipt3_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_hipt3_ss3.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("TW_SS7", {en: "SS7 - Tare Weight", es: "Peso de Tara de SS7"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS7", {en: "SS7 - Initial Weight", es: "Peso incial de SS7"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS7", {en: "SS7 - Drained Weight", es: "Peso escurrido de SS7"}, endpointType.weightSensor); 
  var s_hipt3_ss4 = endpoints.addEndpoint("S_HIPT3_SS4", {en: "SS4 - High PT3", es: "SS4 - PT3 Alto"}, endpointType.genericSensor);
                    s_hipt3_ss4.variableTypeId = 1222; 
                    s_hipt3_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_hipt3_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_hipt3_ss4.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("TW_SS8", {en: "SS8 - Tare Weight", es: "Peso de Tara de SS8"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS8", {en: "SS8 - Initial Weight", es: "Peso incial de SS8"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS8", {en: "SS8 - Drained Weight", es: "Peso escurrido de SS8"}, endpointType.weightSensor); 
  var s_tbd_ss5 = endpoints.addEndpoint("S_TBD_SS5", {en: "SS5 - Time Between Dumps", es: "Tiempo entre vaciados de SS5"}, endpointType.genericSensor);
                    s_tbd_ss5.variableTypeId = 1222; 
                    s_tbd_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_tbd_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_tbd_ss5.accessType = endpointAccessType.readWriteCommand;  
   var s_tbd_ss6 = endpoints.addEndpoint("S_TBD_SS6", {en: "SS6 - Time Between Dumps", es: "Tiempo entre vaciados de SS6"}, endpointType.genericSensor);
                    s_tbd_ss6.variableTypeId = 1222; 
                    s_tbd_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_tbd_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_tbd_ss6.accessType = endpointAccessType.readWriteCommand;  
   var s_tbd_ss7 = endpoints.addEndpoint("S_TBD_SS7", {en: "SS7 - Time Between Dumps", es: "Tiempo entre vaciados de SS7"}, endpointType.genericSensor);
                    s_tbd_ss7.variableTypeId = 1222; 
                    s_tbd_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_tbd_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_tbd_ss7.accessType = endpointAccessType.readWriteCommand;  
   var s_tbd_ss8 = endpoints.addEndpoint("S_TBD_SS8", {en: "SS8 - Time Between Dumps", es: "Tiempo entre vaciados de SS8"}, endpointType.genericSensor);
                    s_tbd_ss8.variableTypeId = 1222; 
                    s_tbd_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_tbd_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_tbd_ss8.accessType = endpointAccessType.readWriteCommand;  
   var dpt3pt2_ss5 = endpoints.addEndpoint("DPT3PT2_SS5", {en: "SS5 - Differential PT3-PT2", es: "SS5 - Diferencial PT3-PT2"}, endpointType.pressureSensor);
                      dpt3pt2_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      dpt3pt2_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      dpt3pt2_ss5.accessType = endpointAccessType.readWriteCommand;  
   var dpt3pt2_ss6 = endpoints.addEndpoint("DPT3PT2_SS6", {en: "SS6 - Differential PT3-PT2", es: "SS6 - Diferencial PT3-PT2"}, endpointType.pressureSensor);
                      dpt3pt2_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      dpt3pt2_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      dpt3pt2_ss6.accessType = endpointAccessType.readWriteCommand;  
   var dpt3pt2_ss7 = endpoints.addEndpoint("DPT3PT2_SS7", {en: "SS7 - Differential PT3-PT2", es: "SS7 - Diferencial PT3-PT2"}, endpointType.pressureSensor);
                      dpt3pt2_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      dpt3pt2_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      dpt3pt2_ss7.accessType = endpointAccessType.readWriteCommand;  
   var dpt3pt2_ss8 = endpoints.addEndpoint("DPT3PT2_SS8", {en: "SS8 - Differential PT3-PT2", es: "SS8 - Diferencial PT3-PT2"}, endpointType.pressureSensor);
                      dpt3pt2_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      dpt3pt2_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      dpt3pt2_ss8.accessType = endpointAccessType.readWriteCommand;  
   var h_hipt3_ss5 = endpoints.addEndpoint("H_HIPT3_SS5", {en: "SS5 - High high PT3", es: "SS5 - PT3 Alto alto"}, endpointType.pressureSensor);
                      h_hipt3_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      h_hipt3_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      h_hipt3_ss5.accessType = endpointAccessType.readWriteCommand;  
   var h_hipt3_ss6 = endpoints.addEndpoint("H_HIPT3_SS6", {en: "SS6 - High high PT3", es: "SS6 - PT3 Alto alto"}, endpointType.pressureSensor);
                      h_hipt3_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      h_hipt3_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      h_hipt3_ss6.accessType = endpointAccessType.readWriteCommand;  
   var h_hipt3_ss7 = endpoints.addEndpoint("H_HIPT3_SS7", {en: "SS7 - High high PT3", es: "SS7 - PT3 Alto alto"}, endpointType.pressureSensor);
                      h_hipt3_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      h_hipt3_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      h_hipt3_ss7.accessType = endpointAccessType.readWriteCommand;  
   var h_hipt3_ss8 = endpoints.addEndpoint("H_HIPT3_SS8", {en: "SS8 - High high PT3", es: "SS8 - PT3 Alto alto"}, endpointType.pressureSensor);
                      h_hipt3_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                      h_hipt3_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                      h_hipt3_ss8.accessType = endpointAccessType.readWriteCommand;  
   var s_pdc_ss1 = endpoints.addEndpoint("S_PDC_SS1", {en: "SS1 - Pressure Drop Closing", es: "SS1 - Cierre por caida de presión"}, endpointType.genericSensor);
                    s_pdc_ss1.variableTypeId = 1222; 
                    s_pdc_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_pdc_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_pdc_ss1.accessType = endpointAccessType.readWriteCommand;  
   var s_pdc_ss2 = endpoints.addEndpoint("S_PDC_SS2", {en: "SS2 - Pressure Drop Closing", es: "SS2 - Cierre por caida de presión"}, endpointType.genericSensor);
                    s_pdc_ss2.variableTypeId = 1222; 
                    s_pdc_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_pdc_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_pdc_ss2.accessType = endpointAccessType.readWriteCommand;  
   var s_pdc_ss3 = endpoints.addEndpoint("S_PDC_SS3", {en: "SS3 - Pressure Drop Closing", es: "SS3 - Cierre por caida de presión"}, endpointType.genericSensor);
                    s_pdc_ss3.variableTypeId = 1222; 
                    s_pdc_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_pdc_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_pdc_ss3.accessType = endpointAccessType.readWriteCommand;  
   var s_pdc_ss4 = endpoints.addEndpoint("S_PDC_SS4", {en: "SS4 - Pressure Drop Closing", es: "SS4 - Cierre por caida de presión"}, endpointType.genericSensor);
                    s_pdc_ss4.variableTypeId = 1222; 
                    s_pdc_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_pdc_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_pdc_ss4.accessType = endpointAccessType.readWriteCommand;  
   var s_auto_seat_test = endpoints.addEndpoint("S_AUTO_SEAT_TEST", {en: "Automatic Test PV1&PV2", es: "Test automático PV1&PV2"}, endpointType.genericSensor);
                    s_auto_seat_test.variableTypeId = 1222; 
                    s_auto_seat_test.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_auto_seat_test.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_auto_seat_test.accessType = endpointAccessType.readWriteCommand;  
   var s_enabled_ss1 = endpoints.addEndpoint("S_ENABLED_SS1", {en: "SS1", es: "SS1"}, endpointType.genericSensor);
                    s_enabled_ss1.variableTypeId = 1222; 
                    s_enabled_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_enabled_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_enabled_ss1.accessType = endpointAccessType.readWriteCommand;  
   var s_enabled_ss2 = endpoints.addEndpoint("S_ENABLED_SS2", {en: "SS2", es: "SS2"}, endpointType.genericSensor);
                    s_enabled_ss2.variableTypeId = 1222; 
                    s_enabled_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_enabled_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_enabled_ss2.accessType = endpointAccessType.readWriteCommand;  
   var s_enabled_ss3 = endpoints.addEndpoint("S_ENABLED_SS3", {en: "SS3", es: "SS3"}, endpointType.genericSensor);
                    s_enabled_ss3.variableTypeId = 1222; 
                    s_enabled_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_enabled_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_enabled_ss3.accessType = endpointAccessType.readWriteCommand;  
   var s_enabled_ss4 = endpoints.addEndpoint("S_ENABLED_SS4", {en: "SS4", es: "SS4"}, endpointType.genericSensor);
                    s_enabled_ss4.variableTypeId = 1222; 
                    s_enabled_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_enabled_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_enabled_ss4.accessType = endpointAccessType.readWriteCommand;  
   var s_enabled_ss5 = endpoints.addEndpoint("S_ENABLED_SS5", {en: "SS5", es: "SS5"}, endpointType.genericSensor);
                    s_enabled_ss5.variableTypeId = 1222; 
                    s_enabled_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_enabled_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_enabled_ss5.accessType = endpointAccessType.readWriteCommand;  
   var s_enabled_ss6 = endpoints.addEndpoint("S_ENABLED_SS6", {en: "SS6", es: "SS6"}, endpointType.genericSensor);
                    s_enabled_ss6.variableTypeId = 1222; 
                    s_enabled_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_enabled_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_enabled_ss6.accessType = endpointAccessType.readWriteCommand;  
   var s_enabled_ss7 = endpoints.addEndpoint("S_ENABLED_SS7", {en: "SS7", es: "SS7"}, endpointType.genericSensor);
                    s_enabled_ss7.variableTypeId = 1222; 
                    s_enabled_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_enabled_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_enabled_ss7.accessType = endpointAccessType.readWriteCommand;  
   var s_enabled_ss8 = endpoints.addEndpoint("S_ENABLED_SS8", {en: "SS8", es: "SS8"}, endpointType.genericSensor);
                    s_enabled_ss8.variableTypeId = 1222; 
                    s_enabled_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_enabled_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_enabled_ss8.accessType = endpointAccessType.readWriteCommand;  
   var s_dpt3pt2_ss5 = endpoints.addEndpoint("S_DPT3PT2_SS5", {en: "SS5 - Differential PT3-PT2", es: "SS5 - Diferencial PT3-PT2"}, endpointType.genericSensor);
                    s_dpt3pt2_ss5.variableTypeId = 1222; 
                    s_dpt3pt2_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_dpt3pt2_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_dpt3pt2_ss5.accessType = endpointAccessType.readWriteCommand;  
   var s_dpt3pt2_ss6 = endpoints.addEndpoint("S_DPT3PT2_SS6", {en: "SS6 - Differential PT3-PT2", es: "SS6 - Diferencial PT3-PT2"}, endpointType.genericSensor);
                    s_dpt3pt2_ss6.variableTypeId = 1222; 
                    s_dpt3pt2_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_dpt3pt2_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_dpt3pt2_ss6.accessType = endpointAccessType.readWriteCommand;  
   var s_dpt3pt2_ss7 = endpoints.addEndpoint("S_DPT3PT2_SS7", {en: "SS7 - Differential PT3-PT2", es: "SS7 - Diferencial PT3-PT2"}, endpointType.genericSensor);
                    s_dpt3pt2_ss7.variableTypeId = 1222; 
                    s_dpt3pt2_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_dpt3pt2_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_dpt3pt2_ss7.accessType = endpointAccessType.readWriteCommand;  
   var s_dpt3pt2_ss8 = endpoints.addEndpoint("S_DPT3PT2_SS8", {en: "SS8 - Differential PT3-PT2", es: "SS8 - Diferencial PT3-PT2"}, endpointType.genericSensor);
                    s_dpt3pt2_ss8.variableTypeId = 1222; 
                    s_dpt3pt2_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_dpt3pt2_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_dpt3pt2_ss8.accessType = endpointAccessType.readWriteCommand;  
   var s_hipt3_ss5 = endpoints.addEndpoint("S_HIPT3_SS5", {en: "SS5 - High PT3", es: "SS5 - Alto PT3"}, endpointType.genericSensor);
                    s_hipt3_ss5.variableTypeId = 1222; 
                    s_hipt3_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_hipt3_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_hipt3_ss5.accessType = endpointAccessType.readWriteCommand;  
   var s_hipt3_ss6 = endpoints.addEndpoint("S_HIPT3_SS6", {en: "SS6 - High PT3", es: "SS6 - Alto PT3"}, endpointType.genericSensor);
                    s_hipt3_ss6.variableTypeId = 1222; 
                    s_hipt3_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_hipt3_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_hipt3_ss6.accessType = endpointAccessType.readWriteCommand;  
   var s_hipt3_ss7 = endpoints.addEndpoint("S_HIPT3_SS7", {en: "SS7 - High PT3", es: "SS7 - Alto PT3"}, endpointType.genericSensor);
                    s_hipt3_ss7.variableTypeId = 1222; 
                    s_hipt3_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_hipt3_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_hipt3_ss7.accessType = endpointAccessType.readWriteCommand;  
   var s_hipt3_ss8 = endpoints.addEndpoint("S_HIPT3_SS8", {en: "SS8 - High PT3", es: "SS8 - Alto PT3"}, endpointType.genericSensor);
                    s_hipt3_ss8.variableTypeId = 1222; 
                    s_hipt3_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_hipt3_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_hipt3_ss8.accessType = endpointAccessType.readWriteCommand;  
   var s_pdc_ss5 = endpoints.addEndpoint("S_PDC_SS5", {en: "SS5 - Pressure Drop Closing", es: "SS5 - Cierre por caida de presión"}, endpointType.genericSensor);
                    s_pdc_ss5.variableTypeId = 1222; 
                    s_pdc_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_pdc_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_pdc_ss5.accessType = endpointAccessType.readWriteCommand;  
   var s_pdc_ss6 = endpoints.addEndpoint("S_PDC_SS6", {en: "SS6 - Pressure Drop Closing", es: "SS6 - Cierre por caida de presión"}, endpointType.genericSensor);
                    s_pdc_ss6.variableTypeId = 1222; 
                    s_pdc_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_pdc_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_pdc_ss6.accessType = endpointAccessType.readWriteCommand;  
   var s_pdc_ss7 = endpoints.addEndpoint("S_PDC_SS7", {en: "SS7 - Pressure Drop Closing", es: "SS7 - Cierre por caida de presión"}, endpointType.genericSensor);
                    s_pdc_ss7.variableTypeId = 1222; 
                    s_pdc_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_pdc_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_pdc_ss7.accessType = endpointAccessType.readWriteCommand;  
   var s_pdc_ss8 = endpoints.addEndpoint("S_PDC_SS8", {en: "SS8 - Pressure Drop Closing", es: "SS8 - Cierre por caida de presión"}, endpointType.genericSensor);
                    s_pdc_ss8.variableTypeId = 1222; 
                    s_pdc_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    s_pdc_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    s_pdc_ss8.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("A_FULL_TANK", {en: "Full tank", es: "Tanque lleno"}, endpointType.genericSensor)
              .variableTypeId = 1224; 
    endpoints.addEndpoint("A_FULL_TANK_MW8", {en: "MW8 - Full tank", es: "MW8 - Tanque lleno"}, endpointType.genericSensor)
              .variableTypeId = 1224; 
    endpoints.addEndpoint("A_LINE_VOLTAGE", {en: "mSand - Line Voltage", es: "Voltaje de línea de mSand"}, endpointType.genericSensor)
              .variableTypeId = 1226; 
    endpoints.addEndpoint("A_LINE_VOLTAGE_MMS", {en: "MMS - Line Voltage", es: "Voltaje de línea de MMS"}, endpointType.genericSensor)
              .variableTypeId = 1226; 
    endpoints.addEndpoint("A_LINE_VOLTAGE_MW8", {en: "MW8 - Line Voltage", es: "MW8 - Tensión de linea"}, endpointType.genericSensor)
              .variableTypeId = 1226; 
    endpoints.addEndpoint("A_LINE_VOLTAGE_MMS2", {en: "MMS2 - Line Voltage", es: "MMS2 - Tensión de linea"}, endpointType.genericSensor)
              .variableTypeId = 1226; 
    endpoints.addEndpoint("A_H_HIPT3_SS1", {en: "High high SS1 PT3", es: "Alto alto de SS1 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_H_HIPT3_SS2", {en: "High high SS2 PT3", es: "Alto alto de SS2 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_H_HIPT3_SS3", {en: "High high SS3 PT3", es: "Alto alto de SS3 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_H_HIPT3_SS4", {en: "High high SS4 PT3", es: "Alto alto de SS4 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_1_FAIL", {en: "PV1 operation failure", es: "Falla de operación de PV1"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_2_FAIL", {en: "PV2 operation failure", es: "Falla de operación de PV2"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_3_FAIL", {en: "CV3 operation failure", es: "Falla de operación de CV3"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_1_SS1", {en: "SS1 PV1´ operation failure", es: "Falla de operación de SS1 PV1´"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_1_SS2", {en: "SS2 PV1´ operation failure", es: "Falla de operación de SS12 PV1´"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_1_SS3", {en: "SS3 PV1´ operation failure", es: "Falla de operación de SS3 PV1´"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_1_SS4", {en: "SS4 PV1´ operation failure", es: "Falla de operación de SS4 PV1´"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_H_HIPT3_SS5", {en: "High high SS5 PT3", es: "Alto alto SS5 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_H_HIPT3_SS6", {en: "High high SS6 PT3", es: "Alto alto SS6 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_H_HIPT3_SS7", {en: "High high SS7 PT3", es: "Alto alto SS7 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_H_HIPT3_SS8", {en: "High high SS8 PT3", es: "Alto alto SS8 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_BC_LOW_VOLTAGE_MMS2", {en: "MMS2 CB battery low voltage", es: "Voltaje bajo de batería de MMS2 CB"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_PB_LOW_VOLTAGE_MMS2", {en: "MMS2 PB battery low voltage", es: "Voltaje bajo de batería de MMS2 PB"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL", {en: "mSand Hydraulic System Failure", es: "Falla del sistema hidraulico de mSand"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL_MMS", {en: "MMS Hydraulic System Failure", es: "Falla del sistema hidraulico de MMS"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL_MW8", {en: "mW8 Hydraulic System Failure", es: "Falla del sistema hidraulico de mW8"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_BC_LOW_VOLTAGE", {en: "mSand CB battery low voltage", es: "Voltaje bajo de batería de mSand CB"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_BC_LOW_VOLTAGE_MMS", {en: "MMS CB battery low voltage", es: "Voltaje bajo de batería de MMS CB"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_BC_LOW_VOLTAGE_MW8", {en: "mW8 CB battery low voltage", es: "Voltaje bajo de batería de mW8 CB"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_PB_LOW_VOLTAGE", {en: "mSand PB battery low voltage", es: "Voltaje bajo de batería de mSand PB"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_PB_LOW_VOLTAGE_MMS", {en: "MMS PB battery low voltage", es: "Voltaje bajo de batería de MMS PB"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_PB_LOW_VOLTAGE_MW8", {en: "mW8 PB battery low voltage", es: "Voltaje bajo de batería de mW8 PB"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_1_SEAT_TEST_FAIL", {en: "Test - PV1 seat test unsuccessful", es: "Prueba de asentamiento de PV1 fallida"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_2_SEAT_TEST_FAIL", {en: "Test - PV2 seat test unsuccessful", es: "Prueba de asentamiento de PV2 fallida"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VENT_FAIL", {en: "Test - Vent Fail", es: "Falla de prueba de ventilación"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_DUMP_SS1", {en: "Dump SS1 Command Acknowledgement", es: "Confirmación de comando de volcado de SS1"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_DUMP_SS2", {en: "Dump SS2 Command Acknowledgement", es: "Confirmación de comando de volcado de SS2"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_DUMP_SS3", {en: "Dump SS3 Command Acknowledgement", es: "Confirmación de comando de volcado de SS3"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_DUMP_SS4", {en: "Dump SS4 Command Acknowledgement", es: "Confirmación de comando de volcado de SS4"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_TEST", {en: "Test Command Acknowledgement", es: "Confirmación de comando de prueba"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_STOP", {en: "Stop Command Acknowledgement", es: "Confirmación de comando de parada"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_RST_ERR", {en: "Reset Command Acknowledgement", es: "Confirmación de comando de reinicio"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_RST_A", {en: "Clear Alarms Command Acknowledgement", es: "Confirmación de comando de borrar alarmas"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_1_SS5", {en: "SS5 PV1´ operation failure", es: "Fallo de funcionaminto de SS5 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_1_SS6", {en: "SS6 PV1´ operation failure", es: "Fallo de funcionaminto de SS6 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_1_SS7", {en: "SS7 PV1´ operation failure", es: "Fallo de funcionaminto de SS7 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_1_SS8", {en: "SS8 PV1´ operation failure", es: "Fallo de funcionaminto de SS8 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL_MMS2", {en: "MMS2 Hydraulic System Failure", es: "MMS2 Falla en sistema hidráulico"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("A_VALVE_X_SEAT_TEST_FAIL", {en: "Test - SSx PV1' seat test unsuccessful", es: "Test - SSx PV1' seat test unsuccessful"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_DUMP_SS5", {en: "Dump SS5 Command Acknowledgement", es: "SS5 - Confirmacion de comando de vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_DUMP_SS6", {en: "Dump SS6 Command Acknowledgement", es: "SS6 - Confirmacion de comando de vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_DUMP_SS7", {en: "Dump SS7 Command Acknowledgement", es: "SS7 - Confirmacion de comando de vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("ACK_DUMP_SS8", {en: "Dump SS8 Command Acknowledgement", es: "SS8 - Confirmacion de comando de vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1227; 
    endpoints.addEndpoint("OPMODE", {en: "Operational mode", es: "Modo de operación"}, endpointType.genericSensor)
              .variableTypeId = 1228; 
    endpoints.addEndpoint("SIEVE_STATUS", {en: "Sieve Status", es: "Estado de sieve"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("FIRMWARE", {en: "Firmware version", es: "Versión de firmware"}, endpointType.genericSensor)
              .variableTypeId = 1230; 
    endpoints.addEndpoint("SERIAL_LSW", {en: "Serial number", es: "Número de serie"}, endpointType.genericSensor)
              .variableTypeId = 1230; 
    endpoints.addEndpoint("SSQ", {en: "Sand separators quantity", es: "cantidad de Sand separators"}, endpointType.genericSensor)
              .variableTypeId = 1230; 
    endpoints.addEndpoint("DUMPS", {en: "Dump counter", es: "Contador de vaciados"}, endpointType.genericSensor)
              .variableTypeId = 1230; 
  var testseat = endpoints.addEndpoint("TESTSEAT", {en: "Test PV1&PV2 Seat Every", es: "Test PV1&PV2 Seat Every"}, endpointType.genericSensor);
                    testseat.variableTypeId = 1230; 
                    testseat.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    testseat.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    testseat.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("TR", {en: "Test Result", es: "Test Result"}, endpointType.genericSensor)
              .variableTypeId = 1230; 
    endpoints.addEndpoint("STATUS", {en: "General status", es: "Estado general"}, endpointType.genericSensor)
              .variableTypeId = 1225; 
  var tbd_ss1 = endpoints.addEndpoint("TBD_SS1", {en: "SS1 Time Between Dumps", es: "Tiempo entre vaciados de SS1"}, endpointType.genericSensor);
                    tbd_ss1.variableTypeId = 1232; 
                    tbd_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    tbd_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    tbd_ss1.accessType = endpointAccessType.readWriteCommand;  
   var tbd_ss2 = endpoints.addEndpoint("TBD_SS2", {en: "SS2 Time Between Dumps", es: "Tiempo entre vaciados de SS2"}, endpointType.genericSensor);
                    tbd_ss2.variableTypeId = 1232; 
                    tbd_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    tbd_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    tbd_ss2.accessType = endpointAccessType.readWriteCommand;  
   var tbd_ss3 = endpoints.addEndpoint("TBD_SS3", {en: "SS3 Time Between Dumps", es: "Tiempo entre vaciados de SS3"}, endpointType.genericSensor);
                    tbd_ss3.variableTypeId = 1232; 
                    tbd_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    tbd_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    tbd_ss3.accessType = endpointAccessType.readWriteCommand;  
   var tbd_ss4 = endpoints.addEndpoint("TBD_SS4", {en: "SS4 Time Between Dumps", es: "Tiempo entre vaciados de SS4"}, endpointType.genericSensor);
                    tbd_ss4.variableTypeId = 1232; 
                    tbd_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    tbd_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    tbd_ss4.accessType = endpointAccessType.readWriteCommand;  
   var tbd_ss5 = endpoints.addEndpoint("TBD_SS5", {en: "SS5 Time Between Dumps", es: "Tiempo entre vaciados de SS5"}, endpointType.genericSensor);
                    tbd_ss5.variableTypeId = 1232; 
                    tbd_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    tbd_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    tbd_ss5.accessType = endpointAccessType.readWriteCommand;  
   var tbd_ss6 = endpoints.addEndpoint("TBD_SS6", {en: "SS6 Time Between Dumps", es: "Tiempo entre vaciados de SS6"}, endpointType.genericSensor);
                    tbd_ss6.variableTypeId = 1232; 
                    tbd_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    tbd_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    tbd_ss6.accessType = endpointAccessType.readWriteCommand;  
   var tbd_ss7 = endpoints.addEndpoint("TBD_SS7", {en: "SS7 Time Between Dumps", es: "Tiempo entre vaciados de SS7"}, endpointType.genericSensor);
                    tbd_ss7.variableTypeId = 1232; 
                    tbd_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    tbd_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    tbd_ss7.accessType = endpointAccessType.readWriteCommand;  
   var tbd_ss8 = endpoints.addEndpoint("TBD_SS8", {en: "SS8 Time Between Dumps", es: "Tiempo entre vaciados de SS8"}, endpointType.genericSensor);
                    tbd_ss8.variableTypeId = 1232; 
                    tbd_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    tbd_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    tbd_ss8.accessType = endpointAccessType.readWriteCommand;  
   var dhp_ss1 = endpoints.addEndpoint("DHP_SS1", {en: "SS1 - Dump Holding Period", es: "Período de retención de vaciado de SS1"}, endpointType.genericSensor);
                    dhp_ss1.variableTypeId = 1233; 
                    dhp_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dhp_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dhp_ss1.accessType = endpointAccessType.readWriteCommand;  
   var dhp_ss2 = endpoints.addEndpoint("DHP_SS2", {en: "SS2 - Dump Holding Period", es: "Período de retención de vaciado de SS2"}, endpointType.genericSensor);
                    dhp_ss2.variableTypeId = 1233; 
                    dhp_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dhp_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dhp_ss2.accessType = endpointAccessType.readWriteCommand;  
   var dhp_ss3 = endpoints.addEndpoint("DHP_SS3", {en: "SS3 - Dump Holding Period", es: "Período de retención de vaciado de SS3"}, endpointType.genericSensor);
                    dhp_ss3.variableTypeId = 1233; 
                    dhp_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dhp_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dhp_ss3.accessType = endpointAccessType.readWriteCommand;  
   var dhp_ss4 = endpoints.addEndpoint("DHP_SS4", {en: "SS4 - Dump Holding Period", es: "Período de retención de vaciado de SS4"}, endpointType.genericSensor);
                    dhp_ss4.variableTypeId = 1233; 
                    dhp_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dhp_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dhp_ss4.accessType = endpointAccessType.readWriteCommand;  
   var ttd_ss1 = endpoints.addEndpoint("TTD_SS1", {en: "SS1 - Time to drain", es: "Tiempo para drenar SS1"}, endpointType.genericSensor);
                    ttd_ss1.variableTypeId = 1233; 
                    ttd_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    ttd_ss1.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    ttd_ss1.accessType = endpointAccessType.readWriteCommand;  
   var ttd_ss2 = endpoints.addEndpoint("TTD_SS2", {en: "SS2 - Time to drain", es: "Tiempo para drenar SS2"}, endpointType.genericSensor);
                    ttd_ss2.variableTypeId = 1233; 
                    ttd_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    ttd_ss2.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    ttd_ss2.accessType = endpointAccessType.readWriteCommand;  
   var ttd_ss3 = endpoints.addEndpoint("TTD_SS3", {en: "SS3 - Time to drain", es: "Tiempo para drenar SS3"}, endpointType.genericSensor);
                    ttd_ss3.variableTypeId = 1233; 
                    ttd_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    ttd_ss3.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    ttd_ss3.accessType = endpointAccessType.readWriteCommand;  
   var ttd_ss4 = endpoints.addEndpoint("TTD_SS4", {en: "SS4 - Time to drain", es: "Tiempo para drenar SS4"}, endpointType.genericSensor);
                    ttd_ss4.variableTypeId = 1233; 
                    ttd_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    ttd_ss4.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    ttd_ss4.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("HP_ST", {en: "Holding Period For Valve Seat Test", es: "Período de espera para prueba de asientamiento de la válvula"}, endpointType.genericSensor)
              .variableTypeId = 1233; 
  var vt = endpoints.addEndpoint("VT", {en: "Vent timeout", es: "Tiempo de espera de ventilación"}, endpointType.genericSensor);
                    vt.variableTypeId = 1233; 
                    vt.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    vt.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    vt.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("EMPTYING_TIME_MW8", {en: "mW8 Hopper Emptying Time", es: "Tiempo de vaciado de la tolva de mW8"}, endpointType.genericSensor)
              .variableTypeId = 1233; 
  var dhp_ss5 = endpoints.addEndpoint("DHP_SS5", {en: "SS5 - Dump Holding Period", es: "Período de retención de vaciado de SS5"}, endpointType.genericSensor);
                    dhp_ss5.variableTypeId = 1233; 
                    dhp_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dhp_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dhp_ss5.accessType = endpointAccessType.readWriteCommand;  
   var dhp_ss6 = endpoints.addEndpoint("DHP_SS6", {en: "SS6 - Dump Holding Period", es: "Período de retención de vaciado de SS6"}, endpointType.genericSensor);
                    dhp_ss6.variableTypeId = 1233; 
                    dhp_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dhp_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dhp_ss6.accessType = endpointAccessType.readWriteCommand;  
   var dhp_ss7 = endpoints.addEndpoint("DHP_SS7", {en: "SS7 - Dump Holding Period", es: "Período de retención de vaciado de SS7"}, endpointType.genericSensor);
                    dhp_ss7.variableTypeId = 1233; 
                    dhp_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dhp_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dhp_ss7.accessType = endpointAccessType.readWriteCommand;  
   var dhp_ss8 = endpoints.addEndpoint("DHP_SS8", {en: "SS8 - Dump Holding Period", es: "Período de retención de vaciado de SS8"}, endpointType.genericSensor);
                    dhp_ss8.variableTypeId = 1233; 
                    dhp_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    dhp_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    dhp_ss8.accessType = endpointAccessType.readWriteCommand;  
   var ttd_ss5 = endpoints.addEndpoint("TTD_SS5", {en: "SS5 - Time to drain", es: "Tiempo para drenar SS5"}, endpointType.genericSensor);
                    ttd_ss5.variableTypeId = 1233; 
                    ttd_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    ttd_ss5.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    ttd_ss5.accessType = endpointAccessType.readWriteCommand;  
   var ttd_ss6 = endpoints.addEndpoint("TTD_SS6", {en: "SS6 - Time to drain", es: "Tiempo para drenar SS6"}, endpointType.genericSensor);
                    ttd_ss6.variableTypeId = 1233; 
                    ttd_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    ttd_ss6.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    ttd_ss6.accessType = endpointAccessType.readWriteCommand;  
   var ttd_ss7 = endpoints.addEndpoint("TTD_SS7", {en: "SS7 - Time to drain", es: "Tiempo para drenar SS7"}, endpointType.genericSensor);
                    ttd_ss7.variableTypeId = 1233; 
                    ttd_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    ttd_ss7.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    ttd_ss7.accessType = endpointAccessType.readWriteCommand;  
   var ttd_ss8 = endpoints.addEndpoint("TTD_SS8", {en: "SS8 - Time to drain", es: "Tiempo para drenar SS8"}, endpointType.genericSensor);
                    ttd_ss8.variableTypeId = 1233; 
                    ttd_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
                    ttd_ss8.operationWarningMessage  = {en:"Security Check!", es: "Comprobación de seguridad!"};
                    ttd_ss8.accessType = endpointAccessType.readWriteCommand;  
     endpoints.addEndpoint("ND_SSX_LSW", {en: "Any SSx - Next Dump", es: "Any SSx - Next Dump"}, endpointType.genericSensor)
              .variableTypeId = 1232; 
    endpoints.addEndpoint("ND_SS1_LSW", {en: "SS1 - Next Dump", es: "SS1 - Próximo volcado"}, endpointType.genericSensor)
              .variableTypeId = 1232; 
    endpoints.addEndpoint("ND_SS2_LSW", {en: "SS2 - Next Dump", es: "SS2 - Próximo volcado"}, endpointType.genericSensor)
              .variableTypeId = 1232; 
    endpoints.addEndpoint("ND_SS3_LSW", {en: "SS3 - Next Dump", es: "SS3 - Próximo volcado"}, endpointType.genericSensor)
              .variableTypeId = 1232; 
    endpoints.addEndpoint("ND_SS4_LSW", {en: "SS4 - Next Dump", es: "SS4 - Próximo volcado"}, endpointType.genericSensor)
              .variableTypeId = 1232; 
    endpoints.addEndpoint("ND_SS5_LSW", {en: "SS5 - Next Dump", es: "SS5 - Próximo volcado"}, endpointType.genericSensor)
              .variableTypeId = 1232; 
    endpoints.addEndpoint("ND_SS6_LSW", {en: "SS6 - Next Dump", es: "SS6 - Próximo volcado"}, endpointType.genericSensor)
              .variableTypeId = 1232; 
    endpoints.addEndpoint("ND_SS7_LSW", {en: "SS7 - Next Dump", es: "SS7 - Próximo volcado"}, endpointType.genericSensor)
              .variableTypeId = 1232; 
    endpoints.addEndpoint("ND_SS8_LSW", {en: "SS8 - Next Dump", es: "SS8 - Próximo volcado"}, endpointType.genericSensor)
              .variableTypeId = 1232; 
    endpoints.addEndpoint("LWOT_SS1_LSW", {en: "SS1 - Last Weighing Operation Time", es: "SS1 - Fecha y hora de la última operación de pesaje"}, endpointType.genericSensor)
              .variableTypeId = 1223; 
    endpoints.addEndpoint("LWOT_SS2_LSW", {en: "SS2 - Last Weighing Operation Time", es: "SS2 - Fecha y hora de la última operación de pesaje"}, endpointType.genericSensor)
              .variableTypeId = 1223; 
    endpoints.addEndpoint("LWOT_SS3_LSW", {en: "SS3 - Last Weighing Operation Time", es: "SS3 - Fecha y hora de la última operación de pesaje"}, endpointType.genericSensor)
              .variableTypeId = 1223; 
    endpoints.addEndpoint("LWOT_SS4_LSW", {en: "SS4 - Last Weighing Operation Time", es: "SS4 - Fecha y hora de la última operación de pesaje"}, endpointType.genericSensor)
              .variableTypeId = 1223; 
    endpoints.addEndpoint("LWOT_SS5_LSW", {en: "SS5 - Last Weighing Operation Time", es: "SS5 - Fecha y hora de la última operación de pesaje"}, endpointType.genericSensor)
              .variableTypeId = 1223; 
    endpoints.addEndpoint("LWOT_SS6_LSW", {en: "SS6 - Last Weighing Operation Time", es: "SS6 - Fecha y hora de la última operación de pesaje"}, endpointType.genericSensor)
              .variableTypeId = 1223; 
    endpoints.addEndpoint("LWOT_SS7_LSW", {en: "SS7 - Last Weighing Operation Time", es: "SS7 - Fecha y hora de la última operación de pesaje"}, endpointType.genericSensor)
              .variableTypeId = 1223; 
    endpoints.addEndpoint("LWOT_SS8_LSW", {en: "SS8 - Last Weighing Operation Time", es: "SS8 - Fecha y hora de la última operación de pesaje"}, endpointType.genericSensor)
              .variableTypeId = 1223; 
    endpoints.addEndpoint("PV1", {en: "PV1 Status", es: "Estado de PV1"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("PV2", {en: "PV2 Status", es: "Estado de PV2"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("CV3", {en: "CV3 Status", es: "Estado de CV3"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("PV1_SS1", {en: "SS1 PV1´ Status", es: "Estado de SS1 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("PV1_SS2", {en: "SS2 PV1´ Status", es: "Estado de SS2 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("PV1_SS3", {en: "SS3 PV1´ Status", es: "Estado de SS3 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("PV1_SS4", {en: "SS4 PV1´ Status", es: "Estado de SS4 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("PV1_SS5", {en: "SS5 PV1´ Status", es: "Estado de PV1´ de SS5"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("PV1_SS6", {en: "SS6 PV1´ Status", es: "Estado de PV1´ de SS6"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("PV1_SS7", {en: "SS7 PV1´ Status", es: "Estado de PV1´ de SS7"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("PV1_SS8", {en: "SS8 PV1´ Status", es: "Estado de PV1´ de SS8"}, endpointType.genericSensor)
              .variableTypeId = 1234; 
    endpoints.addEndpoint("S_CONFIG_MAINT", {en: "In Config./Maintenance", es: "En Config./Mantenimiento"}, endpointType.genericSensor)
              .variableTypeId = 1235; 

        
}

function validateDeviceAddress(address, result) {

}

function updateDeviceUIRules(device, rules) {


     rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules) {

     rules.canDelete = false;
    // rules.canEditSubType = (endpoint.address == "2");
}
