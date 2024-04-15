import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
    const RankingTable = () => {
        const participants = [
            'Participante A',
            'Participante B',
            'Participante C',
            // ... adicione mais participantes aqui
        ];


        return (
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}
                >
                    <TextInput
                        placeholder="Buscar por nome"
                        style={{ backgroundColor: 'white', padding: 10, borderRadius: 8 }}
                    />
                </View>

                {/* Body */}
                <ScrollView style={styles.container}>
                    <View style={styles.tableRow}>
                        <Text style={styles.rank}>Rank</Text>
                        <Text style={styles.name}>Nome</Text>
                    </View>
                    {RankingTable.participants.map((participant, index) => (
                        <View key={participant} style={styles.tableRow}>
                            <Text style={styles.rank}>{index + 1}</Text>
                            <Text style={styles.name}>{participant}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Footer */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity>
                        {/* Ícone de casinha (home) */}
                        {/* Exemplo: */}
                        <Text>🏠</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {/* Ícone de adicionar novo */}
                        {/* Exemplo: */}
                        <Text>➕</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    container: {
      flex: 1,
      padding: 16,
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    rank: {
      flex: 1,
      marginRight: 8,
      fontWeight: 'bold',
    },
    name: {
      flex: 3,
    },
  });