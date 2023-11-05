import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, LayoutAnimation, UIManager, Platform } from 'react-native';

const FaqData = [
  {
    id: 1,
    question: 'How does the Lost and Found web app work?',
    answer: 'Our Lost and Found web app provides a platform for users to report lost items and search for their missing possessions. Users can create a profile, submit details about their lost item, and browse through the found items listed on our platform. The app uses the entered details to identify potential matches and connect the owners with the finders.',
  },
  {
    id: 2,
    question: 'What should I do if I have lost something?',
    answer: 'If you have lost something, log in to your account on our web app and report the lost item with as many details as possible. This helps increase the chances of a successful match. We recommend regularly checking our platform for updates on items gallery that match your description.',
  },
  {
    id: 3,
    question: 'Can I search for a lost item without creating an account?',
    answer: 'No you cannot. Since this app is for UPES students only hence we need to log you in to verify you. Having an account also allows you to receive notifications and communicate with the finder of a potential match.',
  },
  {
    id: 4,
    question: 'What should I do if I find a lost item?',
    answer: 'If you find a lost item, please create an account on our web app and report the found item with accurate details. You have to upload a photo of the item to help with identification. This was you will help and owner find their lost item.',
  },
  {
    id: 5,
    question: 'How long does it usually take to find a lost item?',
    answer: 'The time it takes to find a lost item can vary depending on various factors such as the uniqueness of the item, the accuracy of the description, and the availability of potential matches. We encourage users to regularly check our platform and update their lost item reports with any additional details.',
  },
  {
    id: 6,
    question: 'Is my personal information secure?',
    answer: 'We take user privacy and data security seriously. We have implemented measures to safeguard your personal information. Only registered users with verified accounts have access to specific details of lost and found items. We recommend reviewing our privacy policy for more information on data protection.',
  },
  {
    id: 7,
    question: 'What if I have further questions or need assistance?',
    answer: 'If you have any additional questions, need assistance, or encounter any issues with our web app, please reach out to our support team. You can contact us through the provided channels, such as email or the support section on our website.',
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
