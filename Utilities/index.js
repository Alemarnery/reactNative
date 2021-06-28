import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const ICONLIBS = {
  MaterialIcons: "MaterialIcons",
  Ionicons: "Ionicons",
};

export function getIconLib(iconLib) {
  switch (iconLib) {
    case ICONLIBS.MaterialIcons:
      return MaterialIcons;
      break;
    case ICONLIBS.Ionicons:
      return Ionicons;
      break;
    default:
      return MaterialIcons;
  }
}
