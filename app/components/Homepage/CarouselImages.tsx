import { View, Dimensions, Image, ScrollView, StyleSheet } from 'react-native';
import { useState, useRef, useEffect } from 'react';

export default function CarouselImages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const images = [
    require('@/assets/banner1.png'),
    require('@/assets/banner2.png'),
    require('@/assets/banner3.png'),
    require('@/assets/banner4.png'),
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * windowWidth,
        animated: true,
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  // Handle scroll events to update active index
  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.round(contentOffset.x / windowWidth);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {images.map((image, index) => (
          <View key={index} style={[styles.imageContainer, { width: windowWidth }]}>
            <Image
              source={image}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex ? styles.activeDot : styles.inactiveDot
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 800, // Adjust this value to your needs
    position: 'relative',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  imageContainer: {
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white', // Changed to white for better visibility
  },
  inactiveDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white
  },
});