export const MORGAN_CODE = `package fr.morganfoucaut.portfolio;

import java.util.ArrayList;
import java.util.Arrays;

public class Morgan extends Developer {
    
    private String name = "Morgan Foucaut";
    private ArrayList<String> skills = new ArrayList<String>(Arrays.asList("React", "NodeJS", "PHP", "Java", "MySql", "Docker", "AWS"));
    private String whoAmI = "Passionné de code, assoiffé de défis et de nouvelles connaissances.";
    private boolean isProblemSolver = true;
    private boolean isEagerToLearn = true;
    private boolean isHireable;

    public Morgan() {
        System.out.println("Chargement du développeur.");
    }

    public void introduce() {
        System.out.println("Salut, moi c'est " + this.name + "!");
        System.out.println(this.whoAmI);
        System.out.println("Mes compétences: " + String.join(", ", this.skills));
    }

    public boolean isHireable() {
        return this.isProblemSolver && this.isEagerToLearn && (this.skills.size() >= 3);
    }

    public void setHireable(boolean newStatus) {
        this.isHireable = newStatus;
    }

    public static void main(String[] args) {
        Morgan morgan = new Morgan();
        morgan.introduce();

        if (morgan.isHireable()) {
            System.out.println("Hâte de travailler avec vous ! 🚀");
        } else {
            System.out.println("Une seconde s'il vous plait...");
            morgan.setHireable(true);
            System.out.println("Voilà ! 🚀");
        }
    }

}`;