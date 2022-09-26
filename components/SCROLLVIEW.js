import React from 'react';
//importando os componentes View e Text
import { View, Text, StyleSheet, Image, ScrollView } from
'react-native';

export default function() {
    return(
      <View style={{flex:1}}>
            <ScrollView Style={{Backgroundcolor:'#00f',Padding:15 }}>
            <Text >
             <br/> <b>1. Transtornos mentais:<br/> você sabia que praticamente todas as pessoas que cometeram suicídio apresentavam pelo menos um transtorno psiquiátrico? Pessoas com depressão, transtorno bipolar, trantornos relacionados ao uso de drogas lícitas ou ilícitas(álcool, maconha, crack e cocaína, por exemplo), esquizofrenia e transtorno de personalidade fazem parte do grupo de risco. Dessa forma, a identificação e o tratamento dos trastornos mentais pelo médico psiquiatra estão entre os principais fatores de proteção na prevenção do suicídio. </b>
       <br/><b><br/>2. Historico pessoal : Tentativa prévia é o principal fator de risco para o suicidio. Individuos que já tentaram o suicidio têm de cinco a seis vezes mais de chances de tentar novamente .</b>
       <br/><b><br/>3.Ideação suicida : Comentários que demonstrem desespero , desperança e desamparo podem ser manifestação de uma ideiação suicida . Atenção a expressões como "eu desejaria não ter nascido ", "caso não nos encontremos de novo " , "eu preferia estar morto " - são sinais de alerta.</b>

      <br/><br/><b> 4.Fatores estressores crônicos e recentes : Eventos estressores significativos , como separação conjugal , migração ou perda de uma pessoa próxima, além daqueles que levem a prejuizo econômico e social , como falência e perda do emprego , estão associados ao surgimento de pensamentos suicidas.</b>
            </Text>


            </ScrollView>
      </View>
    )
}