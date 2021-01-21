import React, {useState} from 'react';
import styles from './style';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [userText, setUserText] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  );
  const [userChars, setUserChars] = useState('60');
  const [sms, setSms] = useState(null);
  const [error, setError] = useState('');

  const calcSMS = (text, symbols) => {
    const chars = +symbols;
    let basePos = 0;
    let spacePos = 0;
    let sms = text.length <= symbols ? 0 : 1;
    let restMes = [...text];

    if (!text.length) {
      setSms('');
      setError('Помилка: повідомлення не містить ніяких символів');
      return -1;
    }

    do {
      restMes = text.substr(basePos, chars);
      if (text.substr(basePos + chars, 1) === ' ') basePos += chars + 1;
      else {
        spacePos = restMes.lastIndexOf(' ');
        if (spacePos === -1)
          if (
            text.length > chars ||
            text.substr(basePos + chars, chars + 1).length >= chars
          ) {
            setSms('');
            setError(`Помилка: міститься слово, яке більше ${chars} символів`);
            return -1;
          }
        basePos += spacePos + 1;
      }
      sms++;
      // console.log(restMes, text.length, basePos, spacePos, sms);
    } while (text.length - basePos > chars);

    setSms(sms);
    return sms;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.main}>
            <View style={styles.sectionContainer}>
              <TextInput
                style={styles.textInput}
                onFocus={(e) => setError('')}
                onChangeText={(text) => setUserText(text)}
                value={userText}
                multiline={true}
                autoCorrect={false}
                placeholder="Input message..."
              />
            </View>

            <View style={styles.symbolWrapper}>
              <TextInput
                style={styles.charsInput}
                onFocus={(e) => setError('')}
                onChangeText={(text) => setUserChars(text)}
                value={userChars}
                keyboardType="numeric"
                maxLength={3}
              />
              <Text style={styles.symbols}>cимволів</Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onFocus={(e) => setError('')}
              onPress={() => calcSMS(userText, userChars)}>
              <Text style={styles.buttonTxt}>Порахувати кількість SMS</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.calcSMS}>
            {sms && (
              <>
                <Text>Потрібно SMS:</Text>
                <Text style={styles.bigSMS}> {sms}</Text>
              </>
            )}
          </Text>

          {error !== '' && <Text style={styles.errorSMS}>{error}</Text>}
        </ScrollView>
      </View>
    </>
  );
};

export default App;
