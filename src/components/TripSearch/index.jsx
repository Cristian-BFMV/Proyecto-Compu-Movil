import { useState } from 'react';
import { View, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../FormInput';
import Button from '../Button';
import styles from './styles';

const TripSearch = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fromCity: '',
      toCity: '',
    },
  });
  const onSubmit = data => {
    console.log(data, date);
    navigation.navigate('TripSearchBuenas');
  };

  const onTripDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <View style={styles.tripSearchContainer}>
      <Text style={styles.formTitle}>Busca tu viaje</Text>
      <Text style={styles.label}>Ciudad de origen</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            error={errors.firstName ? true : false}
          />
        )}
        name="fromCity"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Text style={styles.label}>Ciudad de destino</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            error={errors.lastName ? true : false}
          />
        )}
        name="toCity"
      />
      <Text style={styles.label}>Fecha de salida</Text>
      <Button onPress={showMode} buttonText={date.toLocaleDateString()} isInput />
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onTripDateChange}
          dateFormat="dayofweek day month"
        />
      )}
      <Button buttonText="Buscar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default TripSearch;
