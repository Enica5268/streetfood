$(document).ready(function() {
    const apiKey = "bca27f5a48-e9826cec72-t1e4cy";
    const url = "https://api.fastforex.io/fetch-multi?from=USD&to=MYR&api_key=" + apiKey;

    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success: function(data) {
            // FastForex returns something like { results: { MYR: 4.66 } }
            const rate = data.results?.MYR || "N/A";
            $("#exchangeRate").text(rate);
        },
        error: function(err) {
            console.error("Error fetching exchange rate:", err);
            $("#exchangeRate").text("Failed to load rate.");
        }
    });
});

