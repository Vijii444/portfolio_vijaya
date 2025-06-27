import java.util.Random;

public class StudentProgram {
    public static void main(String[] args) {
        String[] subjects = {"Math", "Science", "English", "History", "Art", "Music"};
        String[] timeSlots = {"9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"};
        Random rand = new Random();
        
        System.out.println("=== MY PERSONALIZED STUDY SCHEDULE ===");
        
        for (int day = 1; day <= 5; day++) {
            System.out.println("\nDay " + day + ":");
            for (int slot = 0; slot < 3; slot++) {
                String subject = subjects[rand.nextInt(subjects.length)];
                String time = timeSlots[rand.nextInt(timeSlots.length)];
                int duration = rand.nextInt(60) + 30;
                System.out.println("  " + time + " - " + subject + " (" + duration + " min)");
            }
        }
        
        System.out.println("\nTotal study time: " + (5 * 3 * 45) + " minutes");
        System.out.println("Good luck with your studies!");
    }
} 