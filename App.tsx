import React from 'react'
import { CajasModelo1 } from './screen/CajasModelo1';
import { Caja2 } from './screen/Caja2';
import { SafeAreaView } from 'react-native';
import { Caja3 } from './screen/Caja3';
import { Caja4 } from './screen/Caja4';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    {/*<CajasModelo1/>*/}
    {/*<Caja2/>*/}
    {/*<Caja3/>*/}
    <Caja4/>
    </SafeAreaView>
  )
}

export default App;