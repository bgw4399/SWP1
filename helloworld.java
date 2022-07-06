public class helloworld {
    public static void main(String[] args) {
        ArrayList<String> pitches = new ArrayList<>();  // 제네릭스를 사용한 표현
        pitches.add("138");
        pitches.add("129");
        pitches.add("142");
        System.out.println(pitches);  // [138, 129, 142] 출력
    }
}