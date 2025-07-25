import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 400,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
  },
  searchGroup: {
    height: 400,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 16,
    justifyContent: "space-between",
  },
  searchFormGroup: {
    alignItems: "flex-end",
  },
  searchControlGroup: {
    backgroundColor: "rgba(0,0,0,0.4)",
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  searchControl: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  searchFormText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 500,
    marginLeft: 4,
  },
  filterGroup: {
    backgroundColor: "#F9F9F9",
    width: 104,
    height: 45,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  searchButton: {
    width: 50,
    fontWeight: 500,
  },
  listingContainer: {
    width: 205,
  },
  paginationContainer: {
    width: 50,
    fontSize: 30,
    fontWeight: 600,
    color: "#fff",
  },
  showMoreButtonText: {
    fontSize: 15,
    fontWeight: 400,
    color: "#fff",
  },
  showMoreButton: {
    flexDirection: "row",
    columnGap: 40,
    alignItems: "center",
  },
  filterContainer: {
    position: "absolute",
    bottom: 30,
    left: 30,
  },
});

export { styles };