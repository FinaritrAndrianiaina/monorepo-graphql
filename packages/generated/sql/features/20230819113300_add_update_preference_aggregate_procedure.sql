CREATE OR REPLACE FUNCTION features.UPDATE_PREFERENCE_AGGREGATE(profile_id UUID) RETURNS VOID  AS $$
DECLARE
    avg_product_features vector;
BEGIN
    CREATE IF no
    -- Calculate the average product vector
    SELECT AVG(pf.vector) INTO avg_product_features
    FROM "_ProfilesProductLiked" ppl
    JOIN products p ON ppl."A" = p.id
    JOIN profiles pr ON ppl."B" = pr.id
    JOIN features.product_features pf ON p.id = pf."productId"
    WHERE pr.id = profile_id;

    -- Update preferenceAggregate for the specified profile
    UPDATE features.profiles_features
    SET "preferenceAggregate" = avg_product_features
    WHERE profiles = profile_id;

    -- Display a success message
    RAISE NOTICE 'PreferenceAggregate updated for profile %', profile_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION features.TRIGGER_UPDATE_AGGREGATE() RETURNS TRIGGER AS $$
BEGIN
    PERFORM features.UPDATE_PREFERENCE_AGGREGATE(new."B");
    RETURN new;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_update_preference_trigger
AFTER INSERT OR UPDATE OR DELETE ON "_ProfilesProductLiked"
FOR EACH ROW
EXECUTE FUNCTION features.TRIGGER_UPDATE_AGGREGATE();
