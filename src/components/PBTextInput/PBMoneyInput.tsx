import React from 'react';
import { View } from 'react-native';
import { PBTextField } from './PBTextField';

type PBMoneyInputProps = {
    title?: string
    subtitle?: string
    placeholder?: string
    value?: string
    setValue: (value: string) => void
    onChangeText?: (value: string) => void
}

export const PBMoneyInput = ({
  title,
  subtitle,
  placeholder = '0,0',
  value,
  setValue,
  onChangeText
}: PBMoneyInputProps) => {

  const handleChangeText = (input: string) => {
    // Remove any characters that aren't digits, '.' or ','
    let cleaned = input.replace(/[^0-9.,]/g, '');

    // Auto-prefix with '0' if starting with '.' or ','
    if ((cleaned.startsWith('.') || cleaned.startsWith(',')) && cleaned.length === 1) {
      cleaned = '0' + cleaned;
    }

    // Count separators
    const dotCount = (cleaned.match(/\./g) || []).length;
    const commaCount = (cleaned.match(/,/g) || []).length;

    // Only allow one type of decimal separator, and only one total
    if (dotCount > 1 || commaCount > 1 || (dotCount === 1 && commaCount === 1)) {
      return;
    }

    onChangeText(cleaned);
    setValue(cleaned);
  };

  return (
    <View>
      <PBTextField
        title={title}
        subtitle={subtitle}
        placeholder={placeholder}
        value={value}
        onChangeText={ handleChangeText }
        keyboardType="decimal-pad"
      />
    </View>
  );
};