import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Text,
  ImageSourcePropType,
} from 'react-native';
import Colors from '../constants/Colors';
import Font from '../constants/Font';
import FontSize from '../constants/FontSize';
import Spacing from '../constants/Spacing';


const BannerSlider: React.FC = () => {
  const colorScheme = useColorScheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList | null>(null);
  
  const images: { index: number; path: { uri: string } }[] = [
    { index: 0, path: { uri: 'https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/djh.png?alt=media&token=ed9520bb-b06b-4024-93bd-1c8d2fc1ecd0' } },
    { index: 1, path: { uri: 'https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/spandhansds.png?alt=media&token=47f392b2-eea4-480a-9ed5-96d85d359a62' } },
    { index: 2, path: { uri: 'https://firebasestorage.googleapis.com/v0/b/collab-o-452a2.appspot.com/o/34grewg.webp?alt=media&token=c9af02b5-e2a8-4d42-9066-88d766a3ae8e' } },
  ];
  
  
  interface ImageComponentProps {
    index: number;
    source: ImageSourcePropType;
  }

  const ImageComponent: React.FC<ImageComponentProps> = ({ source }) => (
    <Image source={source} style={styles.image} resizeMode="cover" />
  );



  const styles = StyleSheet.create({
    container: {
      // paddingHorizontal: Spacing.padding.base,
      // margin:15,
      marginTop:-20,
      backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
    },
    imageContainer: {
      borderRadius: 12,
      overflow: 'hidden',
        // elevation: 4, // Shadow for Android
        // shadowColor: '#000', // Shadow for iOS
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 4,
        // backgroundColor:Colors.white,
      marginRight: 8,
    },
    image: {
      width: Dimensions.get('window').width - 40,
      height: 200,
      borderRadius: 12,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 15,
      right: 15,
    },
    button: {
      backgroundColor: Colors.primary,
      borderRadius: 8,
      padding: 7,
      width: 100,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: FontSize.base,
      fontFamily: Font["poppins-semiBold"],
    },
    dotContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#888',
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#000',
    },
  });

  const renderButton = () => {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    );
  };

  const renderDot = (index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={[styles.dot, activeIndex === index && styles.activeDot]}
        onPress={() => handleImageChange(index)}
      />
    );
  };

  const handleImageChange = (index: number) => {
    setActiveIndex(index);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % images.length;
      setActiveIndex(newIndex);
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
      }
    }, 3000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 16 }}>
      <FlatList
          ref={(ref) => {
            flatListRef.current = ref;
          }}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            paddingHorizontal: 4,
          }}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <ImageComponent source={item.path} index={0} />
              <View style={styles.buttonContainer}>{renderButton()}</View>
            </View>
          )}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.floor(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
            setActiveIndex(newIndex);
          }}
        />
        <View style={styles.dotContainer}>
          {images.map((_, index) => renderDot(index))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BannerSlider;
