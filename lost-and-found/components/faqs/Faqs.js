import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, LayoutAnimation, UIManager, Platform } from 'react-native';

const FaqData = [
  {
    id: 1,
    question: 'What is React Native?',
    answer: 'React Native is a framework for building mobile apps using React and JavaScript.',
  },
  {
    id: 2,
    question: 'How do I get started with React Native?',
    answer: 'You can get started by installing Node.js, React Native CLI, and setting up an emulator or a physical device for testing.',
  },
  
  {
    id: 3,
    question: 'Can I use third-party libraries with React Native?',
    answer: 'Yes, React Native has a rich ecosystem of third-party libraries that can be used to enhance your app.',
  },
  {
    id: 4,
    question: 'What is the difference between React and React Native?',
    answer: 'React is a library for building web applications, while React Native is a framework for building mobile apps that use React under the hood.',
  },
  {
    id: 5,
    question: 'How can I handle navigation in React Native?',
    answer: 'You can use libraries like React Navigation to handle navigation in your React Native app.',
  },
];

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const FAQItem = ({ item, expanded, toggleExpand }) => {
  return (
    <TouchableOpacity onPress={() => toggleExpand(item.id)}>
      <View style={{ marginHorizontal : 24, marginVertical: 10  }}>
        <Text style={{ fontWeight: '600', fontSize: 17, backgroundColor: "#F2F2F2", padding: 16, borderRadius: 16 }}>{item.question}</Text>
        {expanded && <Text style={{paddingHorizontal: 16, marginTop: 10, backgroundColor: "#f3f3f355", paddingVertical : 10, borderRadius: 16 }}>{item.answer}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const Faqs = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };

  return (
    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '800', fontSize: 32, textAlign: 'left', paddingVertical: 20, marginHorizontal: 35, lineHeight: 40}}>Frequently Asked Questions :</Text>
      <FlatList
        data={FaqData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FAQItem item={item} expanded={expanded === item.id} toggleExpand={toggleExpand} />
        )}
      />
    </View>
  );
};

export default Faqs;
