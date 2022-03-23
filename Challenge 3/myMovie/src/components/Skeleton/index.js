import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {moderateScale} from 'react-native-size-matters';

const Skeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{padding: moderateScale(24)}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: moderateScale(24),
          }}>
          <View>
            <View
              style={{width: moderateScale(160), height: 20, borderRadius: 4}}
            />
            <View
              style={{
                marginTop: 6,
                width: moderateScale(200),
                height: 20,
                borderRadius: 4,
              }}
            />
          </View>
          <View style={{width: 60, height: 60, borderRadius: 50}} />
        </View>
        <View
          style={{
            width: moderateScale(160),
            height: 20,
            borderRadius: 4,
            marginBottom: moderateScale(16),
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <View>
            <View
              style={{
                width: moderateScale(120),
                height: moderateScale(180),
                borderRadius: 10,
                marginRight: moderateScale(16),
              }}
            />
            <View
              style={{
                marginTop: 6,
                width: moderateScale(120),
                height: 20,
                borderRadius: 4,
              }}
            />
            <View
              style={{
                marginTop: 6,
                width: moderateScale(120),
                height: 20,
                borderRadius: 4,
              }}
            />
          </View>
          <View>
            <View
              style={{
                width: moderateScale(120),
                height: moderateScale(180),
                borderRadius: 10,
                marginRight: moderateScale(16),
              }}
            />
            <View
              style={{
                marginTop: 6,
                width: moderateScale(120),
                height: 20,
                borderRadius: 4,
              }}
            />
            <View
              style={{
                marginTop: 6,
                width: moderateScale(120),
                height: 20,
                borderRadius: 4,
              }}
            />
          </View>
          <View>
            <View
              style={{
                width: moderateScale(120),
                height: moderateScale(180),
                borderRadius: 10,
                marginRight: moderateScale(16),
              }}
            />
            <View
              style={{
                marginTop: 6,
                width: moderateScale(120),
                height: 20,
                borderRadius: 4,
              }}
            />
            <View
              style={{
                marginTop: 6,
                width: moderateScale(120),
                height: 20,
                borderRadius: 4,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: moderateScale(160),
            height: 20,
            borderRadius: 4,
            marginTop: moderateScale(24),
            marginBottom: moderateScale(16),
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: moderateScale(120),
              height: moderateScale(180),
              borderRadius: 10,
              marginRight: moderateScale(16),
            }}
          />
          <View
            style={{
              flex: 1,
              height: moderateScale(180),
              paddingVertical: moderateScale(8),
              justifyContent: 'space-between',
              marginBottom: moderateScale(16),
            }}>
            <View
              style={{width: moderateScale(180), height: 20, borderRadius: 4}}
            />
            <View
              style={{width: moderateScale(100), height: 20, borderRadius: 4}}
            />
            <View
              style={{width: moderateScale(120), height: 20, borderRadius: 4}}
            />
            <View
              style={{width: moderateScale(80), height: 20, borderRadius: 4}}
            />
            <View
              style={{width: moderateScale(180), height: 30, borderRadius: 8}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: moderateScale(120),
              height: moderateScale(180),
              borderRadius: 10,
              marginRight: moderateScale(16),
            }}
          />
          <View
            style={{
              flex: 1,
              height: moderateScale(180),
              paddingVertical: moderateScale(8),
              justifyContent: 'space-between',
            }}>
            <View
              style={{width: moderateScale(180), height: 20, borderRadius: 4}}
            />
            <View
              style={{width: moderateScale(100), height: 20, borderRadius: 4}}
            />
            <View
              style={{width: moderateScale(120), height: 20, borderRadius: 4}}
            />
            <View
              style={{width: moderateScale(80), height: 20, borderRadius: 4}}
            />
            <View
              style={{width: moderateScale(180), height: 30, borderRadius: 8}}
            />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;

const styles = StyleSheet.create({});
