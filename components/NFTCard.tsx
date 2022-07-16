import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { ETHPrice, NFTTitle, SubInfo } from "./SubInfo";

const NFTCard = ({ data }: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: SIZES.font,
        margin: SIZES.base,
        backgroundColor: COLORS.white,
        marginBottom: SIZES.extraLarge,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSizes={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ETHPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() =>
              navigation.navigate("Details" as never, { data } as never)
            }
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
