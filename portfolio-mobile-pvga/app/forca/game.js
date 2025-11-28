'use client'
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import { useRouter } from "expo-router";

const palavras = [
  "REACT","JAVASCRIPT","PORTFOLIO","NEXTJS","FRONTEND",
  "BACKEND","COMPONENTE","ESTADO","PROPS","FUNCIONAL",
  "CLASSE","HOOKS","REDUX","CONTEXT","NODEJS",
  "EXPRESS","MONGODB","SQL","GITHUB","VSCODE",
  "TAILWIND","CSS","HTML","TYPESCRIPT","WEBPACK",
  "BABEL","ESLINT","JEST","CYPRESS","API",
  "AJAX","PROMISE","ASYNC","AWAIT","DOM"
];

const getPalavraAleatoria = () => palavras[Math.floor(Math.random()*palavras.length)];

export default function ForcaGame() {
  const router = useRouter();
  const [palavra, setPalavra] = useState(getPalavraAleatoria());
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [erros, setErros] = useState(0);
  const [letraInput, setLetraInput] = useState("");
  const maxErros = 6;

  const handleLetra = (letra) => {
    letra = letra.toUpperCase();
    if (!/^[A-Z]$/.test(letra)) return;
    if (!letrasUsadas.includes(letra)) {
      setLetrasUsadas(prev => [...prev, letra]);
      if (!palavra.includes(letra)) {
        setErros(prev => prev + 1);
      }
    }
  };

  const handleSubmit = () => {
    handleLetra(letraInput);
    setLetraInput("");
  };

  const reiniciarJogo = () => {
    setErros(0);
    setLetrasUsadas([]);
    setLetraInput("");
    setPalavra(getPalavraAleatoria());
  };

  const jogoFinalizado = erros >= maxErros || palavra.split("").every(l => letrasUsadas.includes(l));
  const letrasCorretas = letrasUsadas.filter(l => palavra.includes(l));
  const letrasIncorretas = letrasUsadas.filter(l => !palavra.includes(l));
  const letrasAlfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      
      <View style={styles.container}>
        <Text style={styles.title}>Jogo da Forca</Text>
        <Text style={styles.sub}>Erros: {erros} / {maxErros}</Text>

        {/* boneco - simples visual com partes visíveis conforme erros */}
        <View style={styles.forcaContainer}>
          <View style={styles.forcaBase}/>
          <View style={styles.forcaPosteVertical}/>
          <View style={styles.forcaPosteHorizontal}/>
          <View style={styles.forcaCorda}/>
          <View style={[styles.cabeca, erros > 0 ? styles.show : {}]}/>
          <View style={[styles.corpo, erros > 1 ? styles.show : {}]}/>
          <View style={[styles.bracoE, erros > 2 ? styles.show : {}]}/>
          <View style={[styles.bracoD, erros > 3 ? styles.show : {}]}/>
          <View style={[styles.pernaE, erros > 4 ? styles.show : {}]}/>
          <View style={[styles.pernaD, erros > 5 ? styles.show : {}]}/>
        </View>

        {/* palavra */}
        <View style={styles.palavraContainer}>
          {palavra.split("").map((l, i) => (
            <Text key={i} style={styles.letra}>{letrasUsadas.includes(l) ? l : "_"}</Text>
          ))}
        </View>

        {/* tentativas anteriores */}
        <View style={styles.tentativas}>
          <Text style={{fontWeight:"700", marginBottom:8}}>Tentativas Anteriores:</Text>
          <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"center", gap:8}}>
            {letrasCorretas.map(l => <Text key={l} style={styles.correta}>{l}</Text>)}
            {letrasIncorretas.map(l => <Text key={l} style={styles.incorreta}>{l}</Text>)}
          </View>
        </View>

        {/* input */}
        {!jogoFinalizado && (
          <>
            <View style={styles.inputRow}>
              <TextInput
                value={letraInput}
                onChangeText={(t) => setLetraInput(t.toUpperCase())}
                maxLength={1}
                placeholder="A"
                placeholderTextColor="#999"
                style={styles.input}
              />
              <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.btnText}>Enviar</Text>
              </TouchableOpacity>
            </View>

            {/* teclado virtual */}
            <View style={styles.teclado}>
              {letrasAlfabeto.map((l) => {
                const used = letrasUsadas.includes(l);
                return (
                  <TouchableOpacity
                    key={l}
                    onPress={() => handleLetra(l)}
                    disabled={used}
                    style={[styles.key, used ? styles.keyDisabled : styles.keyActive]}
                  >
                    <Text style={{color: used ? "#666" : "#fff"}}>{l}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        )}

        {/* fim de jogo */}
        {jogoFinalizado && (
          <View style={{alignItems:"center", marginTop:12}}>
            {erros >= maxErros ? (
              <Text style={styles.resultadoDerrota}>Você perdeu! Palavra: {palavra}</Text>
            ) : (
              <Text style={styles.resultadoVitoria}>Parabéns! Você ganhou!</Text>
            )}
            <TouchableOpacity onPress={reiniciarJogo} style={[styles.btn, {marginTop:12}]}>
              <Text style={styles.btnText}>Jogar Novamente</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/")} style={[styles.btn, {backgroundColor:"#444", marginTop:10}]}>
              <Text style={styles.btnText}>Voltar ao Portfólio</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding:20, alignItems:"center" },
  title: { fontSize:24, fontWeight:"700" },
  sub: { marginBottom:8 },

  forcaContainer: { width:250, height:300, marginVertical:12, alignItems:"center", justifyContent:"flex-start" },
  forcaBase:{ position:"absolute", bottom:0, width:"100%", height:12, backgroundColor:"#333", borderRadius:4 },
  forcaPosteVertical:{ position:"absolute", bottom:12, left:60, width:12, height:285, backgroundColor:"#333" },
  forcaPosteHorizontal:{ position:"absolute", top:0, left:60, width:120, height:15, backgroundColor:"#333" },
  forcaCorda:{ position:"absolute", top:12, left:168, width:4, height:35, backgroundColor:"#333" },

  cabeca:{ position:"absolute", top:45, left:150, width:36, height:36, borderRadius:18, borderWidth:3, borderColor:"#333", backgroundColor:"#fff", opacity:0 },
  corpo:{ position:"absolute", top:81, left:168, width:4, height:70, backgroundColor:"#333", opacity:0 },
  bracoE:{ position:"absolute", top:85, left:181, width:4, height:40, transform:[{rotate:"-45deg"}], opacity:0, backgroundColor:"#333" },
  bracoD:{ position:"absolute", top:85, left:153, width:4, height:40, transform:[{rotate:"45deg"}], opacity:0, backgroundColor:"#333" },
  pernaE:{ position:"absolute", top:145, left:181, width:4, height:45, transform:[{rotate:"-30deg"}], opacity:0, backgroundColor:"#333" },
  pernaD:{ position:"absolute", top:145, left:155, width:4, height:45, transform:[{rotate:"30deg"}], opacity:0, backgroundColor:"#333" },
  show:{ opacity:1 },

  palavraContainer:{ flexDirection:"row", justifyContent:"center", flexWrap:"wrap", gap:8, marginVertical:12 },
  letra:{ fontSize:24, fontWeight:"700", marginHorizontal:6 },

  tentativas:{ marginVertical:10, alignItems:"center" },
  correta:{ color:"#16a34a", fontWeight:"700", marginHorizontal:6 },
  incorreta:{ color:"#dc2626", fontWeight:"700", marginHorizontal:6 },

  inputRow:{ flexDirection:"row", alignItems:"center", gap:8, marginBottom:12 },
  input:{ borderWidth:1, borderColor:"#ccc", width:60, height:44, textAlign:"center", fontSize:20, borderRadius:8 },
  btn:{ backgroundColor:"#065169", paddingVertical:10, paddingHorizontal:14, borderRadius:8 },
  btnText:{ color:"#fff", fontWeight:"700" },

  teclado:{ width:"100%", maxWidth:500, flexDirection:"row", flexWrap:"wrap", justifyContent:"center", gap:8 },
  key:{ paddingVertical:8, paddingHorizontal:10, borderRadius:6, margin:4 },
  keyActive:{ backgroundColor:"#065169" },
  keyDisabled:{ backgroundColor:"#ddd" },

  resultadoVitoria:{ fontSize:20, color:"#16a34a", fontWeight:"700" },
  resultadoDerrota:{ fontSize:20, color:"#dc2626", fontWeight:"700" },
});
