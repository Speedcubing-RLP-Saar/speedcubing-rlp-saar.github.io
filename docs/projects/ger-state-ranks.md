# German State Ranks und German State Cup

Autor: Annika Stein

## Die ursprüngliche Idee
Anfang 2024 gab es die Überlegung, für die Cuber in Deutschland neue Kommunikationswege und ein Spaß-Ranking zu erfinden. Dies habe ich im März mit den "Bundesland-Channels" mithilfe eines Discord-Bots (reaction roles) und anschließender Entwicklung der "Bundesland-Rankings" umgesetzt. Allerdings kann man Discord erst ab einem bestimmten Alter nutzen, und da ich niemanden ausschließen wollte, kann jeder nun über ein Formular beitreten. Man trägt dazu die WCA ID und das Bundesland ein, und nachdem ich mich drum gekümmert habe, erscheinen die PRs der jeweiligen Person zusammen mit allen anderen Leuten des Bundeslands. In einer Übersicht sieht man auch die besten Ergebnisse aller bisher erfassten Personen in diesem Ranking. Überall kann man auswählen, ob nur Ergebnisse von Teilnehmern aus Deutschland, oder auch "Non-DE"-Teilnehmer angezeigt werden sollen.

??? abstract "Implementierung"
    Nachdem das Formular ausgefüllt ist, wandern die Bundesland-Zuordnungen in einem Python-Projekt, welches die WCA API bzw. unofficial WCA API (R. Ingelbrecht) verwendet. Mit den Ergebnissen aus der Datenbank werden dann für alle Personen ihre PRs gesammelt, und diese mit den PRs der anderen Cuber aus denselbem Bundesland verglichen bzw. sortiert. Um die Datenbank-Einträge für normale Nutzer lesbar zu machen, mussten ein paar Funktionen hinzugefügt werden, die die Codierung entziffern können. Ein nützliches Paket, um aus den Python-Daten Websiten zu basteln, ist "dominate" - so lassen sich die täglich neu berechneten Rankings automatisiert zu html-files umwandeln. GitHub Actions ist dazu hilfreich, denn die Workflows sind so konfiguriert, dass man sich eigentlich gar nicht mehr um die Berechnung kümmern muss und der Prozess sich selbst startet.

## German State Cup 2024
Bei den Deutschen Meisterschaften wurden diese Rankings bzw. eine damit berechenbare Allrounder-Metrik verwendet, um Teams aus drei Personen je Bundesland zu bilden, die in einem Head-to-Head Turnier-Format gegeneinander antraten. Der über viele Monate verbesserte Auswahlalgorithmus sorgte dafür, dass die Teams möglichst gut auf die zufällig gewählten Events angepasst waren und die höchsten Gewinnchancen je Bundesland hatten. Alle Kombinationsmöglichkeiten waren Teil des Algorithmus', und nicht immer sind die Leute gezogen worden, die auch die höchsten "Kinch-Scores" hatten.

## Geplante Erweiterung der German State Ranks für 2025

- Momentan liefert die Website ausschließlich Rankings für "offizielle" PRs, die in der WCA Datenbank erfasst sind. Natürlich sehe ich, wie populär mittlerweile auch die inoffiziellen Events geworden sind, sei es FTO, oder seien es Team Events, Ex-WCA Events usw. - zusammen mit den Entwicklern von CubingContests, also unter anderem Deni Mintsaev, werden wir für etwa Q3 2025 auch hierfür eine Lösung für die German State Ranks finden!
- Alex Botz hatte noch eine schöne Idee, die Rankings um die "Sum of Ranks" zu erweitern. Dies ist rein technisch machbar, aber es erfordert das Laden weiterer externer Information (vollständige deutsche Rankings je Event um die Platzhalter zu füllen).

## Zukünftige Ausgaben des State Cups = German State Cup 2.0
Es gab ein paar Optimierungswünsche, z.B. dass auch Teilnehmer, die zwar in Deutschland leben, aber ein anderes Land für die WCA repräsentieren, teilnehmen dürfen, die Event-Auswahl kann verändert werden, die Auslosung, welche Teams in der ersten Runde gegeneinander antreten, kann man optimieren, der Ablauf während des Events selbst kann beschleunigt werden, und weitere kleine Vorschläge um es noch interessanter für eine große Gruppe zu machen.

## Wie wird all das finanziert?
-> Nur über Spenden, und alle Berechnungen laufen über private Computing-Ressourcen, d.h. wenn du, liebe Cuberin, lieber Cuber, die Ideen sinnvoll findest und möchtest, dass sie umgesetzt werden:
Speedcubing Rheinland-Pfalz / Saarland bzw. die Entwicklung hinter diesen Projekten freut sich über eine Spende. Du kannst dazu entweder bei deiner nächsten Anmeldung zu einem [Wettbewerb](../competitions/index.md) eine Nachricht hinterlassen, dass die Zahlung auch eine Spende enthält (also mehr als die eigentliche Teilnahmegebühr), oder den Paypal-Link einer der Competitions in RLP / Saarland für die Spende nutzen und mit einer [E-Mail](mailto:speedcubing.rlp.saar@gmail.com) kurz mitteilen, dass du gespendet hast.
