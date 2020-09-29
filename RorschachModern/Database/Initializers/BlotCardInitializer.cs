using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RorschachModern.Database.Initializers
{
    public static class BlotCardInitializer
    {
        public static string GetCardNumeral( string path )
        {
            string cardNumeral = path.Substring(path.Length - 12, 7).ToUpper();
            string numeral = cardNumeral.Substring(cardNumeral.Length - 2);
            int cardNumber = int.Parse(numeral);
            switch (cardNumber)
            {
                case 1:
                    numeral = "I";
                    break;
                case 2:
                    numeral = "II";
                    break;
                case 3:
                    numeral = "III";
                    break;
                case 4:
                    numeral = "IV";
                    break;
                case 5:
                    numeral = "V";
                    break;
                case 6:
                    numeral = "VI";
                    break;
                case 7:
                    numeral = "VII";
                    break;
                case 8:
                    numeral = "VIII";
                    break;
                case 9:
                    numeral = "IX";
                    break;
                case 10:
                    numeral = "X";
                    break;
            }
            return cardNumeral.Substring(0, cardNumeral.Length - 3) + " " + numeral;
        }


        public static string GetCommonPerceptions( string path )
        {
            string card = path.Substring(path.Length - 12, 7).ToUpper();
            string holder = card.Substring(card.Length - 2);
            switch (int.Parse(holder))
            {
                case 1:
                    holder = "UNAVAILABLE";
                    break;
                case 2:
                    holder = "UNAVAILABLE";
                    break;
                case 3:
                    holder = "UNAVAILABLE";
                    break;
                case 4:
                    holder = "UNAVAILABLE";
                    break;
                case 5:
                    holder = "UNAVAILABLE";
                    break;
                case 6:
                    holder = "UNAVAILABLE";
                    break;
                case 7:
                    holder = "UNAVAILABLE";
                    break;
                case 8:
                    holder = "UNAVAILABLE";
                    break;
                case 9:
                    holder = "UNAVAILABLE";
                    break;
                case 10:
                    holder = "UNAVAILABLE";
                    break;
            }
            return card.Substring(0, card.Length - 1) + " " + holder;
        }




        public static string GetCardFamiliarName( string path )
        {
            string card = path.Substring(path.Length - 12, 7).ToUpper();
            string holder = card.Substring(card.Length - 2);
            switch (int.Parse(holder))
            {
                case 1:
                    holder = "Intro Card";
                    break;
                case 2:
                    holder = "UNAVAILABLE";
                    break;
                case 3:
                    holder = "UNAVAILABLE";
                    break;
                case 4:
                    holder = "Father Card";
                    break;
                case 5:
                    holder = "Midway Card";
                    break;
                case 6:
                    holder = "Sexuality Card";
                    break;
                case 7:
                    holder = "Mother Card";
                    break;
                case 8:
                    holder = "UNAVAILABLE";
                    break;
                case 9:
                    holder = "UNAVAILABLE";
                    break;
                case 10:
                    holder = "UNAVAILABLE";
                    break;
            }
            return card.Substring(0, card.Length - 1) + " " + holder;
        }




    }
}
