# Für Organisationsteams

Um dir die Arbeit zu erleichtern, findest du hier nützliche Links und Hinweise.

??? tip "Urkunden"

    Für die Urkunden gibt es eine [:octicons-arrow-up-right-24: Website](https://goosly.github.io/wca-certificates){:target="_blank"}, die sich nach der Synchronisation von WCA Live die Ergebnisse und weitere Daten zu deiner Comp nimmt, um automatische Urkundentexte zu generieren. Du kannst selbst steuern, was darauf stehen soll und wie sich der Text ins Layout fügt. Auch der Hintergrund (eine jpg-Datei) ist frei wählbar.

    Am Anfang bzw. vor der Comp kannst du anhand leerer Urkunden testen, wie sie später aussehen werden. Dazu: login auf der Website, wähle eine Comp aus. Dann gibt es einen blauen Button "Empty certificate for `CompID`".

    === "Standard-Urkunden"

        1. Setze im Tab "Customize podium certificates" unten bei "Background design:" deine bevorzugte .jpg-Datei aus dem [:octicons-arrow-up-right-24: WCT Vorlagen-Verzeichnis](https://drive.google.com/drive/folders/1jrMWgOgNscPDqoxzgnEQ1bnV9D4FDzLj){:target="_blank"} ein. Es gibt sie in verschiedenen Farben, und als Querformat (Landscape) oder Hochkant (Portrait).

        2. Da wir Urkunden im Allgemeinen nicht nur an deutsche Cuber vergeben, lassen wir die Sprache einfach so, wie sie standardmäßig eingestellt ist (English (UK)). Den Text im Feld kannst du ebenfalls so übernehmen.

        3. Wenn du nicht gerade zufällig die regionsspezifischen Urkunden für eine Championship erstellst, dann lasse "Only use competitors from countries with ISO (semicolon-separated):" frei.

        4. Zurück zum Tab "Print podium certificates" kannst du nun sehen, dass die Vorlage auch den gewählten Hintergrund enthält.

    === "Lust auf eigenes Urkunden-Design?"

        Zusätzlich zu den Hinweisen bzgl. Standard-Urkunden kannst du mithilfe dieser Schritte die Urkunden etwas individueller gestalten. Außerdem wird dies relevant, wenn du Trainee Delegates ebenso auf der Urkunde nennen möchtest, wie die Junior / Full Delegates (sie sind WCA Staff und stehen standardmäßig schon drauf).

        1.  Wenn du mit Apple Pages arbeitest: eine .pages-Vorlage steht bereit (falls RLP Comp, kannst du die Vorlage [:octicons-mail-24: per Mail](mailto:speedcubing.rlp.saar@gmail.com) anfragen). Dort kann z.B. das Competition-Logo eingefügt werden.
        2. Diese in .pdf exportieren, anschließend mit z.B. "Vorschau" in .jpg exportieren (600 dpi / optimal). Wenn der Export in .jpeg passiert, einfach von Hand die Endung zu .jpg ändern, sonst beschwert sich die Website. Diese Datei kann bei "Background design:" hochgeladen werden.
        3. Damit hast du einen eigenen Hintergrund. Fehlt noch der Text. Hier ist ein Beispiel, welches für RLP Open 2024 genutzt wurde. Beachte die vielen Zeilenumbrüche (das sind die `\n`) am Anfang für das eigene RLP Template, der Text beginnt erst recht weit unten auf der Seite und nicht direkt ganz oben (sonst würde der Text mit dem Logo überlappen)!

        ```
        [
        "\n\n\n\n\n\n\n",
        {"text": "certificate.delegate,\n", "fontSize": "16", "bold": "true"},
        {"text": "on behalf of the ", "fontSize": "16"},
        {"text": "World Cube Association,\n", "fontSize": "16", "bold": "true"},
        {"text": "and ", "fontSize": "16"},
        {"text": "certificate.organizers", "fontSize": "16", "bold": "true"},
        {"text": ", on behalf of the organisation team of ", "fontSize": "16"},
        {"text": "certificate.competitionName", "fontSize": "16", "bold": "true"},
        {"text": ", certify that\n", "fontSize": "16"},
        "\n\n",
        {"text": "certificate.name", "fontSize": "32", "bold": "true"},
        "\n\n",
        {"text": "has placed ", "fontSize": "16"},
        {"text": "certificate.place", "fontSize": "16", "bold": "true"},
        {"text": " at ", "fontSize": "16"},
        {"text": "certificate.event", "fontSize": "16", "bold": "true"},
        "\n\n",
        {"text": "with certificate.resultType of ", "fontSize": "16"},
        {"text": "certificate.result", "fontSize": "16", "bold": "true"},
        {"text": " certificate.resultUnit", "fontSize": "16"}
        ]
        ```

        Der Text kann erweitert bzw. modifiziert werden, z.B. wenn ich einen Trainee Delegate hinzufügen möchte und es genau einen Nicht-Trainee gibt (das "and" fügen wir selbst hinzu):

        ```
        [
        "\n\n\n\n\n\n\n",
        {"text": "certificate.delegate and Carlo Glod,\n", "fontSize": "16", "bold": "true"},
        {"text": "on behalf of the ", "fontSize": "16"},
        {"text": "World Cube Association,\n", "fontSize": "16", "bold": "true"},
        {"text": "and ", "fontSize": "16"},
        {"text": "certificate.organizers", "fontSize": "16", "bold": "true"},
        {"text": ", on behalf of the organisation team of ", "fontSize": "16"},
        {"text": "certificate.competitionName", "fontSize": "16", "bold": "true"},
        {"text": ", certify that\n", "fontSize": "16"},
        "\n\n",
        {"text": "certificate.name", "fontSize": "32", "bold": "true"},
        "\n\n",
        {"text": "has placed ", "fontSize": "16"},
        {"text": "certificate.place", "fontSize": "16", "bold": "true"},
        {"text": " at ", "fontSize": "16"},
        {"text": "certificate.event", "fontSize": "16", "bold": "true"},
        "\n\n",
        {"text": "with certificate.resultType of ", "fontSize": "16"},
        {"text": "certificate.result", "fontSize": "16", "bold": "true"},
        {"text": " certificate.resultUnit", "fontSize": "16"}
        ]
        ```

        Wenn es mehr als einen Nicht-Trainee gibt, kannst du entweder die Reihenfolge ändern: `Carlo Glod, certificate.delegate,\n` (die Website macht Kommas und am Ende vor dem letzten Delegate ein "and"), oder du schreibst die Namen in deiner bevorzugten Reihenfolge mit Kommas selbstständig aus.

    Nun stellt sich noch die Frage, wann die Urkunden gedruckt werden bzw. ob du sie schon vor der Comp (bunt) vordrucken möchtest.

    === "Farbdrucker auf der Comp vorhanden"

        In dem Fall musst du zur Vorbereitung noch nichts weiter tun, außer die blanko Zertifikate begutachten. Behalte die Hinweise von oben griffbereit, und warte ab, bis die ersten Podien feststehen. Dann kannst du die Website bestmöglich ausnutzen und Hintergrund + Text (inkl. Namen, Position, Ergebnis) automatisch zusammenführen lassen. Das macht für dich die wenigste Arbeit. Du bist allerdings auf dem Wettbewerb von der Technik abhängig (größtes Risiko, da noch nichts vorgedruckt wurde).

    === "Kein Farbdrucker auf der Comp vorhanden, aber zuhause"

        Es gibt zwei Optionen:

        - Alternative A: Blanko Urkunden (bunt) zuhause vordrucken (mit dem Button "Empty certificate for `CompID`"), und auf dem Wettbewerb dann nur noch von Hand mit einem schönen Stift die jeweiligen Personen, Platzierungen, Ergebnisse eingetragen. Wird im Allgemeinen so zu einer Mischung aus computergenerierten und persönlichen Zertifikaten und erfordert etwas Konzentration beim Aufschreiben, aber man ist nicht von der bösen Technik abhängig.
        - Alternative B: nur den Hintergrund (bunt) zuhause vordrucken (ohne die Website). Dann mit der Website, aber *ohne Hintergrund* den automatisch generierten Text je Disziplin als PDF herunterladen. Die vorgedruckten Urkunden in der richtigen Orientierung in den Drucker einlegen (dazu am besten mit einem Beispiel auf normalem / kostengünstigen Papier üben, bis es passt). Das ist mMn bei eher wenig Disziplinen mehr Arbeit und wegen der Orientierung auch fehleranfällig. Wenn niemand eine schöne Schrift haben sollte oder es sehr viele Urkunden zu schreiben gäbe (viele Events), kann dies aber auch die bessere Option sein.

    === "Überhaupt kein Farbdrucker vorhanden"

        Wie im ersten Fall kannst du dann den Hintergrund und Text kombiniert generieren lassen, und alles in einem Vorgang Schwarz/Weiß drucken.
